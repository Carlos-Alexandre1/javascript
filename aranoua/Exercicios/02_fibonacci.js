const leitura = require('readline');
const leia = leitura.createInterface({
    input: process.stdin,
    output: process.stdout
})



function fibonacci(n) {
    let penultimo = 0, ultimo = 1, numero;   
    for(let i = 1; i <= n; i++) {
        if (i <= 2) {
            numero = i - 1;
        } else {
            numero = ultimo + penultimo;
            penultimo = ultimo;
            ultimo = numero;
        }       
        console.log(numero);
    }
}
    


leia.question('Informe um número para Fiboncci: ', (num) => {
    fibonacci(num);
    leia.close();
});
