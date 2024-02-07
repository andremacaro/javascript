function input(){
    let x = Number(prompt("Digite um numero inteiro: "))
    while(x > 0){
        if(x % 2 == 0){
            let par1 = x
            let par2 = x + 2
            let par3 = x + 4
            let par4 = x + 6
            let par5 = x + 8
            let soma = par1 + par2 + par3 + par4 + par5
            console.log(`SOMA = ${soma}`)
            x = Number(prompt("Digite um numero inteiro: "))
        }
        else{
            let par1 = x + 1
            let par2 = x + 3
            let par3 = x + 5
            let par4 = x + 7
            let par5 = x + 9
            let soma = par1 + par2 + par3 + par4 + par5
            console.log(`SOMA = ${soma}`)
            x = Number(prompt("Digite um numero inteiro: "))
        }
    }
}
input()
