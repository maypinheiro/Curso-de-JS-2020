/* Parametros e Retornos */

//  arguments é uma array interna de uma função, Contem todos os atributos q foram passados.

// Arguments é um recurso que já existia antes do ECMA 2015.
function soma() {
    let soma = 0
    for (i in arguments){
        soma += arguments [i]
}
return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.1))


