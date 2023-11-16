var nota1mat = document.getElementById('nota1mat')
var nota2mat = document.getElementById('nota2mat')
var nota1fis = document.getElementById('nota1fis')
var nota2fis = document.getElementById('nota2fis')
var nota1qui = document.getElementById('nota1qui')
var nota2qui = document.getElementById('nota2qui')
var nota1bio = document.getElementById('nota1bio')
var nota2bio = document.getElementById('nota2bio')
var nota1his = document.getElementById('nota1his')
var nota2his = document.getElementById('nota2his')
var nota1geo = document.getElementById('nota1geo')
var nota2geo = document.getElementById('nota2geo')
var cMediaMat = document.getElementById('mediaMat')
var cMediaFis = document.getElementById('mediaFis')
var cMediaQui = document.getElementById('mediaQui')
var cMediaBio = document.getElementById('mediaBio')
var cMediaHis = document.getElementById('mediaHis')
var cMediaGeo = document.getElementById('mediaGeo')

nota2mat.addEventListener('keyup', calcularMat)
nota2fis.addEventListener('keyup', calcularFis)
nota2qui.addEventListener('keyup', calcularQui)
nota2bio.addEventListener('keyup', calcularBio)
nota2his.addEventListener('keyup', calcularHis)
nota2geo.addEventListener('keyup', calcularGeo)

function calcularMat(){
    var valor1 = (parseFloat(nota1mat.value))
    var valor2 = (parseFloat(nota2mat.value))
    var media = (valor1 + valor2) / 2
    cMediaMat.innerText = media
    if(media >= 60){
        cMediaMat.classList.remove('reprovado')
        cMediaMat.classList.add('aprovado')
    }
    else{
        cMediaMat.classList.add('reprovado')
    }
}

function calcularFis(){
    var valor3 = (parseFloat(nota1fis.value))
    var valor4 = (parseFloat(nota2fis.value))
    var media = (valor3 + valor4) / 2
    cMediaFis.innerText = media
    if(media >= 60){
        cMediaFis.classList.remove('reprovado')
        cMediaFis.classList.add('aprovado')
    }
    else{
        cMediaFis.classList.add('reprovado')
    }
}

function calcularQui(){
    var valor1 = (parseFloat(nota1qui.value))
    var valor2 = (parseFloat(nota2qui.value))
    var media = (valor1 + valor2) / 2
    cMediaQui.innerText = media
    if(media >= 60){
        cMediaQui.classList.remove('reprovado')
        cMediaQui.classList.add('aprovado')
    }
    else{
        cMediaQui.classList.add('reprovado')
    }
}

function calcularBio(){
    var valor1 = (parseFloat(nota1bio.value))
    var valor2 = (parseFloat(nota2bio.value))
    var media = (valor1 + valor2) / 2
    cMediaBio.innerText = media
    if(media >= 60){
        cMediaBio.classList.remove('reprovado')
        cMediaBio.classList.add('aprovado')
    }
    else{
        cMediaBio.classList.add('reprovado')
    }
}

function calcularHis(){
    var valor1 = (parseFloat(nota1his.value))
    var valor2 = (parseFloat(nota2his.value))
    var mediaHis = (valor1 + valor2) / 2
    cMediaHis.innerText = mediaHis
    if(mediaHis >= 60){
        cMediaHis.classList.remove('reprovado')
        cMediaHis.classList.add('aprovado')
    }
    else{
        cMediaHis.classList.add('reprovado')
    }
}

function calcularGeo(){
    var valor1 = (parseFloat(nota1geo.value))
    var valor2 = (parseFloat(nota2geo.value))
    var mediaGeo = (valor1 + valor2) / 2
    cMediaGeo.innerText = mediaGeo
    if(mediaGeo >= 60){
        cMediaGeo.classList.remove('reprovado')
        cMediaGeo.classList.add('aprovado')
    }
    else{
        cMediaGeo.classList.add('reprovado')
    }
}
