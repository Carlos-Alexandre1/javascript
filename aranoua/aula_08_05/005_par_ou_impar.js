//Escreva um programa que leia um valor e verifique se o valor é par ou impar
const leitura = require('readline');
const leia = leitura.createInterface({
    input: process.stdin,
    output: process.stdout
})
leia.question('Digite o valor: ', (numero) => {
    if (numero % 2 === 0) {
        console.log(`${numero} é par!`)
    } else {
        console.log(`${numero} é impar!`)
    }
    leia.close();
});
