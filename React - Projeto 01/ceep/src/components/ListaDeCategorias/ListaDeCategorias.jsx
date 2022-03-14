import React, { Component } from "react";
import "./style.css";

class ListaDeCategorias extends Component {
  _handleEventoInput(event) {
    if (event.key === "Enter") {
      const inputCategorias = document.getElementById('inputCategorias');
      let valorCategoria = event.target.value;
      this.props.adicionarCategoria(valorCategoria);
      inputCategorias.value = '';
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => {
            return(<li className="lista-categorias_item" key={index}>
              {categoria}
            </li>)
          })}
        </ul>
        <input
          type="text"
          id="inputCategorias"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
