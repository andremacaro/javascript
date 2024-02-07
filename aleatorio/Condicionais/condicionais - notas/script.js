//let nota1 = Number(prompt("Digite a primerira nota: "))
//let nota2 = Number(prompt("Digite a segunda nota: "))
const botao = document.querySelector("#botao")
let resposta = document.querySelector("#resultado")
let situacao = document.querySelector("#situacao")

botao.addEventListener("click", calcMedia)


function calcMedia(){
    let campo1 = window.document.getElementById("campo1")
    let campo2 = window.document.getElementById("campo2")
    let n1 = Number(campo1.value)
    let n2 = Number(campo2.value)
    let notaFinal = n1 + n2
    resposta.innerHTML = `Nota Final: ${notaFinal}`
    if (notaFinal < 60.00) {
        situacao.innerHTML = (`Situação: Reprovado!`)
    }
    else{
        situacao.innerHTML = (`Situação: Aprovado!`)
    }

}

