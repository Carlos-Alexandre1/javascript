const leitura = require('readline');
const leia = leitura.createInterface({
    input: process.stdin,
    output: process.stdout
})

function fatorial_recursivo(n) {
    if (n === 1) {
        return n;
    } else {
        n = n * fatorial_recursivo(n - 1);
        return n;
    }
}

leia.question('Informe um número para saber o fatorial: ', (num) => {
    fatorial = fatorial_recursivo(num);
    console.log('O fatorial de', num, 'é:', fatorial);
    leia.close();
});
