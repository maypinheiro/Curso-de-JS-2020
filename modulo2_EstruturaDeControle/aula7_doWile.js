/* Do Wile 
Estrutura pouco usada */


function aleatorio (min,max) {
    const n1= Math.random() * (max - min) + min
    return Math.floor(n1)
} 
let opcao =0

do {   
    opcao=aleatorio( -1, 10) 
    console.log(`O número sorteado foi ${opcao}`)
} 
while(opcao != -1)  

