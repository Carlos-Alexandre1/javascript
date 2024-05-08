//Exemplo com for (estrutura de repetição)
const leitura = require('readline');
const leia = leitura.createInterface({
    input: process.stdin,
    output: process.stdout
})
leia.question('Digite seu nome: ', (nome) => {
    for (let i =1;i<=5;i++){
        console.log('Olá', nome)
    }
    leia.close();
});