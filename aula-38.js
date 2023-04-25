// Object.defineProperties
// Object.defineProperty

const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    writable: false, // se estiver true => usario.nome = 'novo nome'
    configurable: false, // se estiver true => posso deletar o nome
    enumerable: true, // se estiver true => ele será exibido no objeto
})

class Usuario {

    constructor(email, senha, nome) {
        Object.defineProperties(this, {
            nome: propriedadePadrao(nome),
            senha: propriedadePadrao(senha),
            email: propriedadePadrao(email)
        })
    }
}

const usuario = new Usuario('emails', 'senhas', 'nomes');

console.log(usuario);