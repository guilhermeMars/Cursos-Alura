import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notas:[]
    }; // Propriedade especial, toda vez que é atualizada o react chama o render do componente alterado
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas // Caso as notas não sejam alteradas, o setState nem faz nada
    } 
    this.setState(novoEstado); // React gerencia o método de renderização // Atualiza o estado interno do componente para ser compatível

  }
  render(){ // Não depende do programador mexer/usar o método render já que é algo que leva muito processamento da máquina
    return (
      // Jsx é uma extensão da sintex do js. Maneira fácil de declarar elementos dentro do código
      // react - Lib apenas com o desenho de interface
      // React - Ecossistema com diversas funções
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/> {/*Passa uma propriedade para o filho (props)*/}
        <ListaDeNotas notas={this.state.notas}/> {/*new ListaDeNotas({notas:this.notas})*/}
      </section>
    );
  }
}

export default App;
