let n1 = Number(prompt("Primero valor: "))
let n2 = Number(prompt("Segundo valor: "))
let n3 = Number(prompt("Terceiro valor: "))

if (n1 < n2 && n1 < n3){
    console.log(`Menor = ${n1}`)
}
else if (n2 < n3){
    console.log(`Menor = ${n2}`)
}
else{
    console.log(`Menor = ${n3}`)
}