import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente = new Cliente("Sueli", 45612378907, "789");
const diretor = new Diretor("Guilherme", 10000, 12345678907);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Mari", 5000, 98765432107);
gerente.cadastrarSenha("124");

// Polimorfismo - Propriedade dos objetos de tomarem várias formas
const clienteLogado = SistemaAutenticacao.login(cliente, "789")
const diretorLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteLogado = SistemaAutenticacao.login(gerente, "124");

console.log(clienteLogado);
console.log(diretorLogado);
console.log(gerenteLogado);
