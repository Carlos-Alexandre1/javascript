function sim() {
    alert("Você aceitou namorar comigo! :)");
}

function geraPosicao(min, max) {
    return Math.floor(Math.random() *(max - min) + min) + "%";
}

function desvia(botao) {
    var btn = botao;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.right = geraPosicao(10, 90);
    console.log('Opa, desviei...');
}