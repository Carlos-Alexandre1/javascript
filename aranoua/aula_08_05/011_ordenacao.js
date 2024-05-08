//Desenvolva um programa que leia três valores e ordene-os de forma crescente
const leitura = require('readline');
const leia = leitura.createInterface({
    input: process.stdin,
    output: process.stdout
})
const num = []
for (let i = 1; i <= 3; i++) {
    leia.question(`Digite o ${i}° valor: `, (n) =>{
        num[i] = parseFloat(n);
        leia.close();
    });
}
const ordenacao = num.sort((a,b) => a-b);
console.log('Valores ordenados: ', ordenacao.join(', '));
// leia.question(`Digite o 1° valor: `, (n1) =>{
//     leia.question(`Digite o 2° valor: `, (n2) => {
//         leia.question(`Digite o 3° valor: `, (n3) => {
//             num1 = parseFloat(n1);
//             num2 = parseFloat(n2);
//             num3 = parseFloat(n3);

//             const ordenacao = [num1,num2,num3].sort((a,b) => a-b);
//             console.log('Valores ordenados: ', ordenacao.join(', '));

//             leia.close();
//         });
//     });
// });
