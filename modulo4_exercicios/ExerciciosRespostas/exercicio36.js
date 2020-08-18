/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */

// criar duas funcoes 
// recebem dois parametros  ok 
// primeiro parametro um vetor numerico  ok 
// segundo parametro um numero inteiro ok 

// a primeira função retorna um vetor  
// que é o resultado da mutiplicação de cada elemento do array pelo segundo parametro 

// a segunda função 
// multiplica se o elemento for maior que 5 . 

function calculo(array, numero) {
    let res = []
    let calc = 0
    for (i of array) {
        calc = i * numero
        res.push(calc)
    }
    return `Resultado: ${res}`

}

console.log(calculo([3, 5], 2))

function calculonumero(array, numero) {
    let resutado = []
    let calcular = 1
    for (i of array) {
        if (i > 5) {
            calcular = i * numero
            resutado.push(calcular)
        }

    }
    return `Resultado: ${resutado}`

}
console.log(calculonumero([2,5,6,7], 3))