import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();

    /*
    Stateful components - tem estado interno e guarda informações relevantes e que serão gerenciadas (Ex: App.js)
    Stateless - Não possui estado interno (Ex: CardNota)
    */

    this.state = {
      notas: [],
      categorias: [], // As categorias serão utilizadas aqui e não na ListaDeCateorias pois será utilizada e outras partes do programa
    }; // Propriedade especial, toda vez que é atualizada o react chama o render do componente alterado
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas, // Caso as notas não sejam alteradas, o setState nem faz nada
    };
    this.setState(novoEstado); // React gerencia o método de renderização // Atualiza o estado interno do componente para ser compatível
  }

  adicionarCategoria(valorCategoria){
    const novoArrayCategorias = [...this.state.categorias, valorCategoria];
    const novoEstado = {...this.state, categorias:novoArrayCategorias};
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  render() {
    // Não depende do programador mexer/usar o método render já que é algo que leva muito processamento da máquina
    return (
      // Jsx é uma extensão da sintex do js. Maneira fácil de declarar elementos dentro do código
      // react - Lib apenas com o desenho de interface
      // React - Ecossistema com diversas funções
      <section className="conteudo">
        <FormularioCadastro 
        categorias = {this.state.categorias}
        criarNota={this.criarNota.bind(this)}
        />
        {/*Passa uma propriedade para o filho (props)*/}
        <main className="conteudo-principal">
          <ListaDeCategorias 
          adicionarCategoria = {this.adicionarCategoria.bind(this)}
          categorias={this.state.categorias}
          />
          <ListaDeNotas /*new ListaDeNotas({notas:this.notas})*/
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
