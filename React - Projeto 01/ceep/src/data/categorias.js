export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = []; // Entidades que serão notificadas quando mudar
  }

  inscrever(func){
    this._inscritos.push(func);
  }

  notificar(){
    this._inscritos.forEach(func => func(this.categorias)); // Está executando as funções dos inscritos e carregando as informações novas
  }

  adicionarCategoria(novaCategoria){
      this.categorias.push(novaCategoria);
  }
}
