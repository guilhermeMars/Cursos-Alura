import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntregas";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FomularioCadastro({ aoEnviar, validacoes }) {
  //function formularioAtual(etapa){
  // Switch e case, além de deixarem o código muito grande, normalmente se espalham pra outras partes, tornando o uso dele parcialmente inviável

  // switch(etapa){
  //   case 0:
  //     return <DadosUsuario aoEnviar={proximo}/>
  //   case 1:
  //     return <DadosPessoais aoEnviar={proximo} cpfValidacao={cpfValidacao} etapa={etapa}/>
  //   [...]
  // }

  //}
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState("");
  useEffect(()=>{ // Chama quando o componente for montado, atualizado e desmontado
    if(etapaAtual === formularios.length-1){
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [ // Funciona melhor que o switch case (pode ser utilizado um objeto literal)
    <DadosUsuario aoEnviar={coletarDados} validacoes={validacoes}/>,
    <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
    <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes}/>,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>
  ];

  function coletarDados(dados){
    setDados({...dadosColetados, ...dados}); // useState é assíncrono, sendo assim, ele agenda essa ação para o futuro e não executa na hora que o form é enviado (componentDidMount, componentDidUpdate e componentDidUnmout)
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {formularios[etapaAtual]}
  </>;
}

export default FomularioCadastro;
