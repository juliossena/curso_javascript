const lista = [
    {
        nome: 'Jose',
        idade: 13,
        exibir: true,
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
        nome: 'gabriela',
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

lista.sort((a, b) => {
    if (a.nome.toUpperCase() < b.nome.toUpperCase()) {
        return -1;
    }
    if (a.nome.toUpperCase() > b.nome.toUpperCase()) {
        return 1;
    }
    return 0;
});

console.log(lista)