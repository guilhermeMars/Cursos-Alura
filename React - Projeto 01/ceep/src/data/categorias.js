export default class Categorias {
  constructor() {
    this.categorias = [];
    this._inscritos = []; // Entidades que serão notificadas quando mudar
  }
  
  // Oservable - métodos que fazem com que as classes consigam observar alterações em outras e, assim, serem atualizadas (inscrever e notificar)
  inscrever(func){
    this._inscritos.push(func);
  }

  desinscrever(func){
    this._inscritos = this._inscritos.filter(f => f!== func); // Filtra e devolve tudo que for diferente da função
  }

  notificar(){
    this._inscritos.forEach(func => func(this.categorias)); // Está executando as funções dos inscritos e carregando as informações novas
  }

  adicionarCategoria(novaCategoria){
      this.categorias.push(novaCategoria);
      this.notificar();
  }
}
