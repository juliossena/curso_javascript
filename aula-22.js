const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const aguardarComRetorno = async () => {
    await sleep(3000);
    return 30;
}


const aguardar = async () => {
    console.log('PASSOU', 2 ** 2);
    const resultado = await aguardarComRetorno();
    console.log('resultado', resultado);
    console.log('PASSOU', 3 ** 3);
    console.log('PASSOU', 4 ** 4);
    console.log('PASSOU', 5 ** 5);
    console.log('PASSOU', 9 ** 9);
    console.log('PASSOU', 1 ** 1);
}

aguardar();