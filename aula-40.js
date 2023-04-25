const qualquer = {
    abc: 'fdsa',
    flkd: 'fdsa',
    fdjslajkf: 'gdsag',
    fjdl: 'gdsa'
}

const novoQualquer = {
    ...qualquer,
    final: 'FINAL'
}


const lista = [54, 643, 643, 643, 643];
const lista2 = [643,754, 7547, 754,84,754];

// console.log(qualquer);
// console.log(novoQualquer);

// console.log(lista);
// console.log(lista2);

const listaJunta = [
    ...lista,
    ...lista2
]

console.log(listaJunta);
