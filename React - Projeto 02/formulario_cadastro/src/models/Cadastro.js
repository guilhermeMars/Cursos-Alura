function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: true, texto: "O cpf deve ter 11 dígitos" };
  } else {
    return { valido: false, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 6) {
    return { valido: true, texto: "A senha deve ter mais de 6 dígitos" };
  } else {
    return { valido: false, texto: "" };
  }
}

function validarNome(nome){
    if(nome.length <= 3){
        return {valido: true, texto:"Coloque seu nome, não um apelido"}
    } else{
        return {valido: false, texto:""}
    }
}

export {validarCpf, validarSenha, validarNome};
