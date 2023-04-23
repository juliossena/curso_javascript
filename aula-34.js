const lista = [
    {
        nome: 'Jose',
        idade: 13,
        cartoes: ['3244', '5435']
    },
    {
        nome: 'Joao',
        idade: 42,
        cartoes: ['321', '64']
    },
    {
        nome: 'Maria',
        idade: 23,
        cartoes: ['423', '654']
    },
    {
        nome: 'gabriela',
        idade: 25,
        cartoes: ['543', '87']
    },
    {
        nome: 'Fernanda',
        idade: 65,
        cartoes: ['231', '87']
    },
    {
        nome: 'André',
        idade: 69,
        cartoes: ['324', '76']
    },
    {
        nome: 'Heitor',
        idade: 32,
        cartoes: ['432', '765']
    },
    {
        nome: 'Gustavo',
        idade: 64,
        cartoes: ['435', '765']
    },
    {
        nome: 'Sandra',
        idade: 33,
        cartoes: ['234', '654']
    },
]

const cartoes = lista.flatMap((cartao) => cartao.cartoes);

console.log(cartoes);
