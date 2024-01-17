function calcular(){
    var caixa = document.getElementById("tabuada")
    var numero = document.getElementById("numero").value
    if (numero === ''){
        window.alert("Por favor, digite um número!")
    }
    else{
        caixa.innerHTML = ''
        for (var i = 1; i <= 10; i++){ 
            let item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero * i}`
            item.value = `caixa${i}` // Para outras linguagens como PHP
            caixa.appendChild(item)
        } 
    }
}    