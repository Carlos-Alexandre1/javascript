const leitura = require('readline');
const leia = leitura.createInterface({
    input: process.stdin,
    output: process.stdout
})

leia.question(`Digite o 1° valor: `, (n1) =>{
    leia.question(`Digite o 2° valor: `, (n2) => {
        leia.question(`Digite o 3° valor: `, (n3) => {
            num1 = parseFloat(n1);
            num2 = parseFloat(n2);
            num3 = parseFloat(n3);

            const media = (num1 + num2 + num3) / 3;
            console.log('Media: ', media);

            leia.close();
        });
    });
});