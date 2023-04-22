const QUANTIDADE = 6;

function numerosImpares(valor) {
    let contar = 0;
    let novoValor = valor;

    while(contar < QUANTIDADE) {
        if (novoValor % 2 !== 0) {
            console.log(novoValor);
            contar++;
        }

        novoValor++;
    }
}

numerosImpares(98547);
