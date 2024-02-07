
function qtdNum() {
    let input = document.querySelector("input#numero").value
    let res = document.querySelector("div#res")
    res.innerHTML = "NUMEROS NEGATIVOS: "
    let n = Number(input)
    let vetor = []
    for (i = 1; i <= n; i++) {
        let x = Number(prompt("Digite um número: "))
        vetor.push(x)
    }
    console.log(vetor)

    // for(i = 1; i < vetor.length; i++){
    //     if(vetor[i] < 0){
    //         let negativo = vetor[i]
    //         res.innerHTML += `<br>${negativo}`
    //         console.log(`${negativo}`)
    //     }
    // }

    vetor.forEach((num) => {                //#### Otimização feita pelo chatGPT
        if (num < 0) {                      //####
            res.innerHTML += `<br>${num}`;  //####
            console.log(num);               //####
        }
    })    
}