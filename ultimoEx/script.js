let vetor =[]
function adicionar(){
    dados.innerHTML = ""
    let input = document.getElementById("numero").value
    let output = document.getElementById("res")
    let n = Number(input)
    if (vetor.includes(n) || n < 1 || n > 100){
        alert("Valor inválido ou já encontrado na lista")
    }
    else{
        vetor.push(n)
        let item = document.createElement("option")
        item.text = `Vetor ${n} adicionado`
        output.appendChild(item)
    }
}

function finalizar(){
    if(vetor.length == 0){
        alert("Adicione valores antes de finalizar!")
    }
    else{
        //Verificar quantos números estãop cadastrados
        let dados = document.getElementById("dados")
        dados.innerHTML = `Ao todo, temos ${vetor.length} números cadastrados.<br>`
        
        //Verificar qual o maior número
        //let maior = Math.max(...vetor) | Versão menor pelo ChatGPT
        let maior = vetor[0]
        for(i = 1; i < vetor.length; i++){
            if(vetor[i] > maior){
                maior = vetor[i]
            }
        }
        dados.innerHTML += `O maior valor informado foi ${maior}.<br>`
        
        //Verificar qual o menor número
        let menor = vetor[0]
        for(i = 1; i < vetor.length; i++){
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
        dados.innerHTML += `O menor valor informado foi ${menor}.<br>`
    
        //Somar todos os valores do vetor e calcular a média
        let soma = vetor[0]
        for(i = 1; i < vetor.length; i++){
            soma += vetor[i]
        }
        let media = soma / vetor.length
        dados.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
        dados.innerHTML += `A média dos valores digitados é ${media}.`
    }


}

