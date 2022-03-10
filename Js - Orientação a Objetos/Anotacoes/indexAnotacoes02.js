import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente01 = new Cliente("Guilherme", 11122233307);
// cliente01.nome = "Guilherme";
// cliente01.cpf = "11122233307";

const cliente02 = new Cliente("Marianna", 44455566609);
// cliente02.nome = "Marianna";
// cliente02.cpf = "44455566609";

const ContaCorrenteGuilherme = new ContaCorrente(cliente01, '1001');
// ContaCorrenteGuilherme.agencia = 1001;
// ContaCorrenteGuilherme.cliente = cliente01; // Fez uma classe como Atributo de outra
ContaCorrenteGuilherme.depositar(500);

const ContaCorrenteMarianna = new ContaCorrente(cliente02, '1007');
// ContaCorrenteMarianna.cliente = cliente02;
// ContaCorrenteMarianna.agencia = '1007';

ContaCorrenteGuilherme.transferir(200, ContaCorrenteMarianna);

console.log(ContaCorrente.numContas);

// Null - Alguém tem que ter atribuído o valor nulo (nada)
// Undefined - Aparece quando nenhum valor é atribuído 