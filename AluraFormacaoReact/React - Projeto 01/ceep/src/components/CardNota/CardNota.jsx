// Comandos da extensão Simple React Snippets

import React, { Component } from "react"; // imrc
import "./style.css";

class CardNota extends Component {
  // cc
  render() {
    return (
      <section className="card-nota"> {/*className é a mesma coisa que o class, porém adaptado para o jsx*/}
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;