import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import { Container, Typography } from "@mui/material";
import '@fontsource/roboto/300.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h2" component="h1" align="center">
        Formulario de Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} cpfValidacao={validarCpf} />
    </Container>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCpf(cpf){
  if(cpf.length !== 11){
    return {valido:true, texto:"O cpf deve ter 11 dígitos"};
  }else{
    return {valido:false, texto:""}
  }
}

export default App;
