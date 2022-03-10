import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numContas = 0; // Static é algo que funciona para todas as contas, sendo o mesmo dado para todas
    // agencia;
    // _cliente;

    set cliente(valor){ // Por ele não ser exatamente igual um método, pode ser chamado através do =
        if(valor instanceof Cliente){ // instanceof é uma propriedade que valida se é uma instancia de algum objeto
            this._cliente = valor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    //_saldo = 0; // Como os campos privado ainda não são oficiais, o _ é usado simbolicamente para mostrar que aquele campo é privado

    get saldo(){ // Como não vamos alterar diretamente o saldo, fazemos apenas o get
        return this.saldo;
    }

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        this._saldo = 0;

        ContaCorrente.numContas += 1; // Forma automática de saber quantss contas tem. Precisa ser chamado dessa forma
    }

    // Métodos
    sacar(valor){
        // Early return
        // Pode ser feito para verificar o que não quer que seja feito e já parar a execução do código
        // if(this._saldo <= 0) return;

        if(this._saldo >= valor){ // This é a conta corrente que fez a operação
            // Caso não houvesse a condicional, ficaria negativo
            this._saldo -= valor;
            return valor; 
        }
    }
    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}