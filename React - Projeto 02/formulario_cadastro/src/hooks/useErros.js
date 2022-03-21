// TODOS os hooks customisáveis precisam começar com use
import { useState } from "react";

function useErros(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoInicial);

  function validarCampos(event) {
    const { name, value } = event.target; // Desestruturação
    const eValido = validacoes[name](value); // pegando o objeto de validações, o atributo do campo e o valor
    // const novoEstado = {...erros, name: eValido}
    const novoEstado = { ...erros };
    novoEstado[name] = eValido; // Dessa forma é possivel associar a variável name
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (erros[campo].valido) {
        return false;
      }
    }
    return true;
  }
  return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  for (let campo in validacoes) {
    estadoInicial[campo] = { valido: false, texto: "" };
  }
  return estadoInicial;
}

export default useErros;
