
class Pessoa {
    nome;
    idade;
    filhos;

    quantosFilhos() {
        if (this.filhos) {
            return this.filhos.length;
        }
        return 0;
    }

    constructor(nome, idade, filhos) {
        this.nome = nome;
        this.idade = idade;
        this.filhos = filhos;
    }
}

const filho1 = new Pessoa('Gustavo', 13);
const filho2 = new Pessoa('Gabriela', 10);
console.log('filho1 tem: ', filho1.quantosFilhos())

const pessoa = new Pessoa('José', 54, [filho1, filho2]);

console.log('Quantos filhos? ', pessoa.quantosFilhos())
console.log(pessoa);