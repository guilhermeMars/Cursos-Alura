// Comandos da extensão Simple React Snippets

import React, { Component } from "react"; // imrc
import "./style.css";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"; // SVGR - Ferramenta que faz isso funcionar, vem por padrão do create react app

class CardNota extends Component {
  
  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice); // Está enviando para o pai o indice
  }
  
  // cc
  render() {
    return (
      <section className="card-nota"> {/*className é a mesma coisa que o class, porém adaptado para o jsx*/}
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)}/> {/*<img src={DeleteSVG} alt="Deletar Nota" />*/}
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
