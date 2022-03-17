import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function DadosEntrega({aoEnviar}) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        name="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="dense"
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        id="endereco"
        name="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        fullWidth
        margin="dense"
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        id="numero"
        name="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="dense"
      />
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        id="estado"
        name="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="dense"
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        id="cidade"
        name="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        fullWidth
        margin="dense"
      />
      <Button type="submit" variant="contained" color="primary">
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
