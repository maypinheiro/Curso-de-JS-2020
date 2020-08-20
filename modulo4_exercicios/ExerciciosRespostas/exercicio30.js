/*  Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */


// Ordenar os Numeros de um array
let numeros= [10,2,8,33,1]

function comprar (n1,n2) {   // função para compar os numeros 
    return n1-n2
}

console.log(numeros.sort(comprar))
console.log(numeros.sort(comprar)[0])  // pega o menor numero.
console.log(numeros.sort(comprar).reverse()[0]) // ordenar os numeros em ordem decrecente. 

 