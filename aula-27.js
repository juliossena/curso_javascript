const lista = [
    {
        nome: 'Jose',
        idade: 13
    },
    {
        nome: 'Joao',
        idade: 42
    },
    {
        nome: 'Maria',
        idade: 23
    },
    {
        nome: 'Gabriela',
        idade: 25
    },
    {
        nome: 'Fernanda',
        idade: 65
    },
    {
        nome: 'André',
        idade: 69
    },
    {
        nome: 'Heitor',
        idade: 32
    },
    {
        nome: 'Gustavo',
        idade: 64
    },
    {
        nome: 'Sandra',
        idade: 33
    },
]
let soma = 0;

// for(let i = 0; i < lista.length; i++ ) {
//     soma += lista[i].idade
// }

const somaIdade = (objeto) => {
    soma += objeto.idade
}

lista.forEach(somaIdade);

console.log('Soma: ', soma)