/*
    Um posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes.
Escreva um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma:
   1.Álcool 2.Gasolina 3.Diesel 4.Fim
Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido). 
O programa será encerrado quando o código informado for o número 4, devendo então mostrar a mensagem 
"MUITO OBRIGADO", bem como as quantidades de cada combustível.

*/

function obterCodigo(){
    let alcool = 0
    let gasolina = 0
    let diesel = 0
    let input;

    do{
        input = Number(prompt("Informe um codigo (1, 2, 3) ou 4 para parar: "))
    switch(input){
        case 1:
            alcool ++
        break
        case 2:
            gasolina ++
        break
        case 3:
            diesel ++
        break;   
    }
}while(input !== 4)
console.log(`Álcool = ${alcool} Gasolina = ${gasolina} Diesel = ${diesel}`)
}
obterCodigo()


