let preco = Number(prompt("Preço unitário do produto: "))
let qtd = Number(prompt("Quantidade comprada: "))
let recebido = Number(prompt("Dinheiro recebido: "))

let total = qtd * preco

if (total < recebido){
    troco = recebido - total
    console.log(`TROCO = ${troco.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`)
}
else{
    var faltam = total - recebido
    console.log(`DINHEIRO INSUFICIENE. FALTAM ${faltam.toLocaleString('pt-br',{style:'currency', currency:'BRL'})} REAIS`)
}

