function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/foto-manha.jpg'
        document.body.style.background = '#F4E5B6'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = '#C37853'
    } else {
        //BOA NOITE!
        img.src = 'imagens/foto-noite.jpg'
        document.body.style.background = '#0B2445'
    }    
}
