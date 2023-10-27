function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }
    else {
        var fsex = document.getElementById("radsex")
        var idade = ano - Number(formAno.value)
        var generoMasc = document.getElementById("masc")
        var generoFem = document.getElementById("fem")
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(generoMasc.checked){
            var genero = 'Homem'
            if(idade >= 0 && idade <10){
                //Criança
                img.setAttribute('src', 'imagens/bebe-menino.jpg')
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/homem-jovem.jpg')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            }
            else{
                //Idoso
                img.setAttribute('src', 'imagens/homem-idoso.jpg')
            }
        }
        else if(generoFem.checked){
            var genero = 'Mulher'
            if(idade >= 0 && idade <10){
                //Criança
                img.setAttribute('src', 'imagens/bebe-menina.jpg')
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            }
            else{
                //Idoso
                img.setAttribute('src', 'imagens/mulher-idosa.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}


        /*
        if (fsex[0].checked) {
            genero = 'Homem'
        }                                   ELE FEZ DESSE JEITO MAS
                                            NAO DEU CERTO
        else if(fsex[1].checked){
            genero = 'Mulher'
        }
        */