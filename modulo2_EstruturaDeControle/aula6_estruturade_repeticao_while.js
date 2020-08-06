/* Estrutura de Repeticção While 
 - Mais adequada para repertiçoes indeterminadas*/

/*  Mais indicada quando não sabemos quantos elementos o usuario ira  colocar.
Usado para quantidades indeterminadas de vezes  */


 function aleatorio (min,max) {
    const n1= Math.random() * (max - min) + min
    return Math.floor(n1)
} 
let opcao =0

while(opcao != -1) {   
    opcao=aleatorio(-1,10) 
    console.log(`O número sorteado foi ${opcao}`)
} 
const valoor = function aleatorio ( min, max) {
    
}

// Outro Exemplo.
let n1= 1 
 while (n1<=10) {
     console.log (`Contador ${n1}`)
     n1++

 }



