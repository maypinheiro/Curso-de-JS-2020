/* // Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares

/* let numero = [2, 4, 6, 7, 8, 9]
let par =[]
let impa=[] */


// tenho que acessar cada elemento.   for in 
// ver se é divisivel for 2  
// divisivel por 2 - guardo em uma varivel ----
// não divisivel guardo em outra.  ----
// retornar o tamanho das variaveis.  length.



function verificar (numeros){
    let par =[]
    let impar =[]

    for(let n in numeros){
        if (numeros[n] % 2 == 0){
            par.push(numeros[n])
         } else{
            impar.push(numeros[n])
         }
    }
    return `numereos pares: ${par.length},Numero impar ${impar.length}`
}
let numeros = [1,3,6,5]
console.log(verificar(numeros))

// console.log(verificar([1,3,6,5]))  - Também podemos passar assim.

