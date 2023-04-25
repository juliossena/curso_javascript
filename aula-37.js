class Usuario {
    email;
    senha;
    nome;

    validarSenha(email, senha) {
        return email + senha === this.nome;
    }

    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}

class Administrador extends Usuario {
    permissoes;

    validarSenha(email, senha) {
        return email === this.email && senha === this.senha;
    }

    constructor(email, senha, nome, permissoes) {
        super(email, senha, nome);
        this.permissoes = permissoes;
    }
}

class Comprador extends Usuario {
    compras;
}

const admin = new Administrador('email@email.com', 'senha', 'Jose', [1, 6]);
const usuario = new Usuario('email@email.com', 'senha', 'Jose');



const comprador = new Comprador();
comprador.senha = 'nova senha';

console.log(usuario.validarSenha('email@email.com', 'senha'));
console.log(admin.validarSenha('email@email.com', 'senha'));


