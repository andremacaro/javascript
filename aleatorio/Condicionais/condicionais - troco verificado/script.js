/* Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia.
O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto,
e o valor em dinheiro dado pelo cliente. Seu programa deve mostrar o valor do troco a ser devolvido
ao cliente. Se o dinheiro dado pelo cliente não for suficiente, mostrar uma mensagem informando o
valor restante conforme exemplo. 
*/


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

/* CHAT GPT

function obterNumeroInput(mensagem) {
    let input;

    // O loop continua até que o usuário forneça uma entrada válida (um número)
    do {
        // Solicita uma entrada ao usuário usando o prompt
        input = prompt(mensagem);

        // O loop continua se a entrada não for um número, estiver vazia ou for nula
    } while (isNaN(input) || input === '' || input === null);

    // Converte a entrada para um número e a retorna
    return Number(input);
}

*/