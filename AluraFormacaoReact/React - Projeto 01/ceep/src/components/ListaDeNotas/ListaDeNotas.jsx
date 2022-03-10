import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css";

class ListaDeNotas extends Component {
  render() {
    return (
      /*  
      - Tudo que fica dentro das chaves é um código js
      - Nem todos os comandos js funcionam no jsx (como o for, por exemplo) 
      */
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
