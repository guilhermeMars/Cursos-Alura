import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App, { calcularNovoSaldo } from "./App";

// Um it pode ser feito fora do describe
// it e test são a mesma coisa

describe("Componente principal", () => {
  describe("Quando eu abro o app do banco:", () => {
    test("O nome é exibido", () => {
      render(<App />);

      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });

    it("O saldo é exibido", () => {
      render(<App />);

      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });

    it("O botão de realizar operação é exibido", () => {
      render(<App />);

      expect(screen.getByText("Realizar operação")).toBeInTheDocument();
    });
  });
  describe("Quando eu realizo uma transação:", () => {
    it("Que é um saque, o valor vai diminuir", () => {
      const valores = {
        // Objeto que fala o tipo de operação e o quanto que será utilizado
        transacao: "saque",
        valor: 50,
      };
      const novoSaldo = calcularNovoSaldo(valores, 150);

      expect(novoSaldo).toBe(100); // Espera que o retorno seja 100
    });
    it("que é um saque, a transação deve ser realizada", () => {
      // Verificar se a transação foi feita corretamente
      //   const { getByText, getByTestId, getByLabelText } = render(<App />);
      render(<App />); // Render inicializa o componente para ser testado

      // Diferentes formas de instanciar os componentes
      // Screen é um objeto possui tudo que o render renderizou
      const saldo = screen.getByText("R$ 1000");
      const transacao = screen.getByLabelText("Saque");
      const valor = screen.getByTestId("valor");
      const botaoTransacao = screen.getByText("Realizar operação");

      expect(saldo.textContent).toBe("R$ 1000"); // Verificou se o valor padrão era 1000

      fireEvent.click(transacao, { target: { value: "saque" } }); // fireEvent - Função do react-test-library que simula um evento do DOM
      fireEvent.change(valor, { target: { value: 10 } });
      fireEvent.click(botaoTransacao);

      expect(saldo.textContent).toBe("R$ 990"); // Verificou se foi retirado 10, por conta do saque
    });
  });
});
