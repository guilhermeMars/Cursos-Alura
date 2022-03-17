import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function DadosUsuario({ aoEnviar, validacoes }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({senha:{valido:false, texto:""}});

  function validarCampos(event) {
    const { name, value } = event.target;
    const eValido = validacoes[name](value);
    const novoEstado = { ...erros };
    novoEstado[name] = eValido;
    setErros(novoEstado);
  }

  function possoEnviar(){
    for(let campo in erros){
      if(erros[campo].valido){
        return false
      }
    }
    return true
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        name="email"
        label="Email"
        type="email"
        required
        fullWidth
        margin="dense"
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name="senha"
        label="Senha"
        type="password"
        required
        fullWidth
        margin="dense"
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
