import React, { useState, useContext } from "react";
import { Button, Switch, TextField, FormControlLabel } from "@mui/material";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro.js";
import useErros from "../../hooks/useErros.js";

function DadosPessoais({ aoEnviar }) {
  // Como tem muitas propriedades, nós especificamos quais vamos utilizar

  // State=[] - Não pode ser usado, pois é uma função e não possui estado próprio nem ciclo de vida

  // Hooks - useState: Não podem ser chamadads dentro de condições. Só podem ser chamadas em funções do React (com return etc)
  // useState retorna uma variável que pode referenciar o estado e uma função para modifica-la

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  return (
    <form
      // Fomulátio não controlado - feito apenas pelo html. Não possui validações, pois o que aparece na tela não bate com o que é passado para o estado
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          // let tempNome = event.target.value; // Precisa ter essa validação por conta da assincronicidade de dos setter's, que impedem de apagar o que foi escrito
          // if(tempNome.length >=3){
          //   tempNome = tempNome.substring(0, 3);
          // }
          // setNome(tempNome);
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error={erros.nome.valido}
        helperText={erros.nome.texto}
        id="lbl_nome"
        name="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="dense"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="lbl_sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="dense"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="lbl_cpf"
        name="cpf"
        label="Cpf"
        variant="outlined"
        fullWidth
        margin="dense"
      />

      <FormControlLabel
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
          />
        }
        label="Novidades"
      />
      <FormControlLabel
        control={
          <Switch
            checked={promocoes} // Controlado pois o valor só é atriuído a partir de um componente pai
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
          />
        }
        label="Promoções"
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
