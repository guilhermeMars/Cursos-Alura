import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import { Container, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import { validarCpf, validarNome, validarSenha } from "./models/Cadastro.js";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h2" component="h1" align="center">
        Formulario de Cadastro
      </Typography>
      <ValidacoesCadastro.Provider // Fala quais as informações que os elementos dentro do contexto vão conhecer
        value={{ cpf: validarCpf, senha: validarSenha, nome: validarNome }}
      >
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
