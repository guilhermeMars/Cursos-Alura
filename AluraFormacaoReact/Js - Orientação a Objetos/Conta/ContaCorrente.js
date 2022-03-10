import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{ // Vai trazer tudo da classe conta para essa, como se tivesse com o mesmo código
    static numContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia); // Vai chamar o construtor da classe Pai
        ContaCorrente.numContas += 1;
    }

    // Especializar comportamento
    sacar(valor){ // Quando for necessário modificar um método da classe pai, é só chama-lo com o mesmo nome

        let taxa = 1.1
        return super._sacar(valor, taxa); // É um método protegido - Pode ser usado na classe e naa classes que a extendem
    }

    // teste(){
    //     super.teste(); // Chama o teste da classe Conta
    //     console.log('Teste na classe ContaCorrente');
    // }
}
