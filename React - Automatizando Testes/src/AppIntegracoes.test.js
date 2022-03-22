import React from 'react';
import { render, screen } from '@testing-library/react';
import api from './api';
import App from './App';

jest.mock('./api'); // Simula o caminho, não acessa diretamente

describe("Requisições para API", () => {
  it("Exibir lista de transações através da API", async () => {
    api.listaTransacoes.mockResolvedValue([ // Retorna o valor já resolvido da promisse, já esperando o valor
      {
        valor: "10",
        transacao: "saque",
        data: "10/08/2020",
        id: 1,
      },
      {
        transacao: "deposito",
        valor: "20",
        data: "26/09/2020",
        id: 2,
      }
    ]);
    render(<App/>);

    // Verificar se carregou corretamente
    // expect(screen.findByText('Saque')).toBeInTheDocument();

    expect(await screen.findByText('saque')).toBeInTheDocument();

    // Está assíncrono, já que não está esperando a chegada dos valores para executar o teste
    expect(screen.getByTestId('transacoes').children.length).toBe(2);
  });
});
