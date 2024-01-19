let num = [6,4,2,5,8]

num.push(1)  //Adiciona um valor no final do vetor
num.sort()   //Ordena os numeros de forma crescente

console.log(num.indexOf(8)) //Mostra o index da posição que se encontra o valor


// for (let pos = 0; pos < num.length; pos++){ // for (i = pos; i < num.length; i++)
//     console.log(`Posição ${num[pos]}`)
// }

for (let pos in num){ // Para cada posição em num
    console.log(num[pos]) //Escreva num na posição pos
}