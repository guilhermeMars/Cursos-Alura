export class Conta{
    constructor(saldoInicial, cliente, agencia){
        //Classe abstrata - Classe pra não ser instanciada
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois é uma classe abstrata");
        }
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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

    // Método Abstrato
    sacar(valor){
        throw new Error("O método sacar é abstrato. Especifique a taxa nas classes");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa *valor
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado; 
        }

        return 0;
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

    // teste(){
    //     console.log('teste na classe Conta');
    // }
}