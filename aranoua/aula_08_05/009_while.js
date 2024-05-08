//Exemplo com while (estrutura de repetição)
const leitura = require('readline');
const leia = leitura.createInterface({
    input: process.stdin,
    output: process.stdout
})
leia.question('Digite seu nome: ', (nome) => {
    let nomes = '';
    let i =1;
    while (i<=5){
        i++;
        nomes += nome + ' ';
    }
    console.log(nomes.trim());
    leia.close();
});