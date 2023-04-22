
function calcular(valor) {
    if (valor === 0) {
        throw new Error('Não pode ser 0');
    }
    return valor / 2;
}

try {
    const resultado = calcular(543);
    console.log('resultado:', resultado);
} catch (error) {
    console.log(error.message)
} finally {
    console.log('Chegou no finally')
}

console.log('continua')
