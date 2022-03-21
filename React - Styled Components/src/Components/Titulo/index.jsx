// import React from "react";
import styled from 'styled-components';

// Styled components gera automaticamente uma classe, para que não tenham conflitos entre as mesmas
const Titulo = styled.h1`
  color: ${({theme})=>theme.text};
  padding: 25px 0;
`

// const Titulo = ({ children }) => {
//   return <h1 className="titulo">{children}</h1>;
// };

export default Titulo;
