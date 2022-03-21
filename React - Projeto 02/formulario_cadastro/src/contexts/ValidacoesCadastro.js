import React from "react";

const ValidacoesCadastro = React.createContext({// Contexto é compor um grupo de dados, funções e funcionalidades que quer transmitir para vários elementos da árvore de renderização, independente de qual lugar da hierarquia ele estiver
  cpf: semValidacao,
  senha: semValidacao,
  nome: semValidacao,
}); // Dentro dos parêntesis ficam os dados padões, caso não tenha um provider, eles são passados

function semValidacao(dados){
    console.log(dados);
    return {valido:true, texto:""}
}
/*cpf: validarCpf,
  senha: validarSenha,
  nome: validarNome, */

export default ValidacoesCadastro;
