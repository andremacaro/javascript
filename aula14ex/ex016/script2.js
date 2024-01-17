function contar() {
    let inicio = parseInt(document.getElementById("inicio").value);
    let fim = parseInt(document.getElementById("fim").value);
    let passo = parseInt(document.getElementById("passo").value);
    let caixa = document.getElementById("res");
    let res = '';

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        caixa.innerHTML = "Impossível contar!";
    } else {
        if (passo === 0) {
            window.alert("Passo inválido! Considerando PASSO 1");
            passo = 1;
        }

        if (inicio < fim) {
            for (var i = inicio; i <= fim; i = i + passo) {
                console.log(i);
                res += `${i} 👉 `;
            }
        } else {
            for (var i = inicio; i >= fim; i = i - passo) {
                console.log(i);
                res += `${i} 👉 `;
            }
        }

        caixa.innerHTML = `Contando: ${res} 🏁`;
    }
}
