//Exemplo com do while (estrutura de repetição)
const leitura = require('readline');
const leia = leitura.createInterface({
    input: process.stdin,
    output: process.stdout
})
leia.question('Digite seu nome: ', (nome) => {
    let nomes = '';
    let i = 6;
    do {
        i++;
        nomes += nome + ' ';
    } while (i<=5);
    console.log(nomes.trim());
    leia.close();
});