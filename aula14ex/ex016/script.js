function contar() {
    let inicio = parseInt(document.getElementById("inicio").value)
    let fim = parseInt(document.getElementById("fim").value)
    let passo = parseInt(document.getElementById("passo").value)
    let res = document.getElementById("res")

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        res.innerHTML = "Impossível contar!"
    }
    else {
        res.innerHTML = `Contando: <br>`
        if (passo <= 0) {
            alert("Passo inválido! Considerando PASSO 1")
            passo = 1
        }
        if (inicio < fim) {
            // CONTAGEM CRESCENTE
            for (var i = inicio; i <= fim; i += passo) {
                res.innerHTML += `${i} \u{1F449} `
            }
        }
        else {
            // CONTAGEM REGRESSIVA
            for (var i = inicio; i >= fim; i -= passo) {
                res.innerHTML += `${i} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}