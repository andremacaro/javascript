let qtdMinutos = Number(prompt("Digite a quantidade ded minutos: "))
let pagar = 50.00

if (qtdMinutos > 100){
    pagar = pagar + ((qtdMinutos - 100) * 2)
    
}
console.log(`Valor a pagar: ${pagar.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`)
