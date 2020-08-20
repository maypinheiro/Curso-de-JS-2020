/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console */

let numeros = [-1, -3, 5, -6, 7, 8, -5]

function verifica(numeros) {
    let negativos = []

    for (n in numeros) {
        if (numeros[n] < 0) {
            negativos.push(numeros[n])

        }

    }
    return (`Temos ${negativos.length } números Negativos`)
}

console.log(verifica(numeros))




function negativos(numero1) {
    let numeroNegativo = []

    for (i = 0; i < numero1.length; i++) {
        if (numero1[i] < 0) {
            numeroNegativo.push(numero1[i])
        }
    }

    return (`numeros negativos ${numeroNegativo} é são ${numeroNegativo.length}`)
}

let numero1 =[1,2,-1,-3]
console.log(negativos(numero1))