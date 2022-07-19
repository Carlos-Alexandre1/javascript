function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/mcrianca.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'imagens/mjovem.png')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'imagens/madulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/midoso.png')
            }
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/fcrianca.png')
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute('src', 'imagens/fjovem.png')
            } else if (idade <= 50) {
                //Adulto
                img.setAttribute('src', 'imagens/fadulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/fidoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Detectamos ${gênero} com ${idade} anos.`)
        res.appendChild(img)
    }
}