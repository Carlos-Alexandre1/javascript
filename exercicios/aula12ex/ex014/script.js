function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
 var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#f5c2a6'
        //Bom dia!
    } else if(hora >= 12 && hora <= 18){
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#fe9d02'
        //Boa tarde!
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#372d4a'
        //Boa noite!
    }
}