export class Cliente{
    // Propriedades, atributos, campos
    
    // Por padrão, é uma boa prática inicializar os campos dentro do próprio construtor
    // nome;
    // _cpf;
    
    constructor(nome, cpf, senha){ // Ao fazer o new, o construtor é chamado e fica entre o () da função
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    get cpf(){
        return this._cpf;
    }

    autenticar(senha){
        return false;
    }
}