// const andre = {
//     idade: 22,
//     altura: 1.68,
//     peso: 50.0,
//     apelido: 'Deco',
//     endereco: {
//         rua:'Catharina Jorge Mansur',
//         numero: 203,
//     }    
// }

// function mostrarIdade({ apelido }){
//     return apelido
// }

// console.log(mostrarIdade(andre))

// fetch('https://api.github.com/users/andremacaro')
//     .then(response => {
//         response.json().then(body => {
//             console.log(body)
//         })
//     })

//     .catch(err => {
//         console.log(err)
//     })

let media = (n1, n2)=>{
    return (n1 + n2) / 2
}

console.log(media(5, 3))