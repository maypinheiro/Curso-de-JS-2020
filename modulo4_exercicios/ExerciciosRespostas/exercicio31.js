/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console */

let numeros=[-1,-3,5,-6,7,8,-5]

function verifica (numeros) {
    let negativos =[]
    
    for (n in numeros){
        if(numeros[n] <0 ){
            negativos.push(numeros[n])

        }

    }
   return(`Temos ${negativos.length } números Negativos`)
}

console.log (verifica(numeros))
