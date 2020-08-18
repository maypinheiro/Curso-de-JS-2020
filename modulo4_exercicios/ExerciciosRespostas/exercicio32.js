/*  Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

// somar todos os elementos do vertor 
// dividir pelos seus elementos. 
//resutado  



function media(numeros) {
    let soma = 0
    let num = 0

    for (n in numeros) {
      soma += numeros[n]
      num++ 
    }
 return soma / num 

}
console.log(media([2, 66, 8, 23, 5]))


// função para calcular elementos em um Array.
function somarNumerosEmUmaArray (array){
    let soma =0
    for (i in array){
        soma+= array[i]
    }
    return soma
}
console.log(somarNumerosEmUmaArray([2,3,4,5]))

////////////////////////////////////////////////
function somarElementos (numeros){
    let soma = 0
    for(i in numeros){
        soma+=numeros[i]
    }
    return soma
}
console.log(somarElementos([1,2,3,5]))
/////////////////////////////////////////////
/// função para calcular a media em um Array.

function calcularMedia(numerosdoArray){
    let soma=0
    let quantidadeDeElementos=0 
        for(i in numerosdoArray){
            soma+=numerosdoArray[i]
            quantidadeDeElementos++
        }
        return soma/quantidadeDeElementos
    
}

console.log(calcularMedia([10,1,10]))