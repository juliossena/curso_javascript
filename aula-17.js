

function teste(key) {
    switch (key) {
        case 'Julio':
        case 'BRIGADEIRO':
            console.log('JULIO AQUI')
            break;
        case 'Jose':
            console.log('Jose AQUI')
            break;
        case 'Joao':
            console.log('Joao AQUI')
            break;
        default:
            console.log('QUALQUER OUTRO AQUI')
            break;
    }
}

teste('Julio')