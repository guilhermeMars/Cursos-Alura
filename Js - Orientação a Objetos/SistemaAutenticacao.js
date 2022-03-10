/* 
Ser autenticavel é ter um método "autenticar"

Duck-type - Comum em linguagens fácilmente tipáveis. "Não me interessa se ele é um pato, interessa que ele anda e age como um pato"
"Não me interessa o tipo do objeto, me interessa se ele tem os métodos e as propriedades necessárias"
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        //return autenticavel.senha == senha; // Dessa forma a senha fica menos segura, já que fica rodando entre as funções
        if(SistemaAutenticacao.eAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha); // Se a senha do funcionário for a mesma cadastrada, retorna true
        }
        return false
    }
    static eAutenticavel(autenticavel){ // Previne erros
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function; // Vai verificar se a chave autenticar existe dentro do objeto e se é uma instância de função
    }
}