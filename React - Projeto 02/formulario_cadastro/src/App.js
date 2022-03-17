import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import { Container, Typography } from "@mui/material";
import '@fontsource/roboto/300.css';
import {validarCpf, validarNome, validarSenha} from "./models/Cadastro.js"

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h2" component="h1" align="center">
        Formulario de Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{cpf:validarCpf, senha:validarSenha, nome:validarNome}} />
    </Container>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
