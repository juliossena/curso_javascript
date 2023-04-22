const mensagem = 'dsjlafj fdFDSAFDSAksjafl';
const mensagem2 = 'fdjsafkljdslakfj';

console.log('tamanho: ', mensagem.length);
console.log('Concat', mensagem.concat(mensagem2));
console.log('Concat +', "dsaklfj" + " " + mensagem + " " + mensagem2);
console.log('ES:', `dsaklfj ${mensagem} ${mensagem2}`);
console.log('Quebrar em array', mensagem.split(' '));

console.log('UP:', mensagem.toUpperCase());
console.log('DOWN:', mensagem.toLowerCase());
console.log('Replace: ', mensagem.replace('fdFDSAFDSAksjafl', 'JULIO'));
