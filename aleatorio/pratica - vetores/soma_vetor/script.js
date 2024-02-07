
function qtdNum(){
    let input = document.querySelector("input#numero").value
    let res = document.querySelector("div#res")
    res.innerHTML = "NUMEROS NEGATIVOS: "

    let n = Number(input)
    let vetor = []

    for(i = 1; i <= n; i++){
        let x = Number(window.prompt("Digite um número: "))
        vetor.push(x)
    }
    
    let valores = vetor[i]
    res.innerHTML += `<br>${valores}`
    console.log(vetor)

}