// const cliente01Nome = "Guilherme";
// const cliente01Cpf = "11122233307";
// const cliente01Agencia = "1001";
// const cliente01Saldo = 0;

// const cliente02Nome = "Marianna";
// const cliente02Cpf = "44455566609";
// const cliente02Agencia = "1002";
// const cliente02Saldo = 2300;

// console.log(cliente01Nome);

// Para evitar a repetição, são criados "moldes"

// Objetos
const cliente01 = new Cliente(); // Intância da classe
const cliente02 = new Cliente();

cliente01.nome = "Guilherme";
cliente01.cpf = "11122233307";

cliente02.nome = "Marianna";
cliente02.cpf = "44455566609";

const ContaCorrenteGuilherme = new ContaCorrente();
ContaCorrenteGuilherme.agencia = 1001;

console.log(ContaCorrenteGuilherme);
ContaCorrenteGuilherme.depositar(200);
ContaCorrenteGuilherme.sacar(150);
console.log(ContaCorrenteGuilherme)

// Não foi feita por conta do if/regra de negócio
ContaCorrenteGuilherme.sacar(100);
ContaCorrenteGuilherme.depositar(-30); 
console.log(ContaCorrenteGuilherme)

// Não funciona pois o saldo é privado
//ContaCorrenteGuilherme.#saldo = 1000
//ContaCorrenteGuilherme.saldo = 1000 // Cria um atributo chamado saldo

const valorSacado = ContaCorrenteGuilherme.sacar(20);
console.log(valorSacado);

console.log(ContaCorrenteGuilherme)

//console.log(cliente01, cliente02);