// Média entre 3 valores
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num1, num2, num3;

function leiaNum1() {
    rl.question('Digite o primeiro valor: ', (input) => {
        num1 = Number(input);
        console.log(typeof num1);
        while(!num1) {
            leiaNum1();
        }
        leiaNum2();
    })
}

function leiaNum2() {
    rl.question('Digite o segundo valor: ', (input) => {
        num2 = Number(input);
        leiaNum3();
    })
}

function leiaNum3() {
    rl.question('Digite o terceiro valor: ', (input) => {
        num3 = Number(input);
        calculoMedia();
    })
}

function calculoMedia() {
    console.log('A média de ', num1, ',', num2, 'e', num3, 'é:', (num1 + num2 + num3) / 3);
    rl.close();
}

leiaNum1();