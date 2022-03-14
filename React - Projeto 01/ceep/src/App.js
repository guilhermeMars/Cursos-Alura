import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./data/categorias";
import ArrayDeNotas from "./data/notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
    /*
    Stateful components - tem estado interno e guarda informações relevantes e que serão gerenciadas (Ex: App.js)
    Stateless - Não possui estado interno (Ex: CardNota)
    */
  }

  render() {
    // Não depende do programador mexer/usar o método render já que é algo que leva muito processamento da máquina
    return (
      // Jsx é uma extensão da sintex do js. Maneira fácil de declarar elementos dentro do código
      // react - Lib apenas com o desenho de interface
      // React - Ecossistema com diversas funções
      <section className="conteudo">
        <FormularioCadastro 
        categorias = {this.categorias.categorias}
        criarNota={this.notas.adicionarNota}
        />
        {/*Passa uma propriedade para o filho (props)*/}
        <main className="conteudo-principal">
          <ListaDeCategorias 
          adicionarCategoria = {this.categorias.adicionarCategoria}
          categorias={this.categorias.categorias}
          />
          <ListaDeNotas /*new ListaDeNotas({notas:this.notas})*/
            apagarNota={this.notas.apagarNota}
            notas={this.notas.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
