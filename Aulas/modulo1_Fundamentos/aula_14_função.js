/*  Funções.
 é um bloco de codigo nomeado, delimitado por {} que recebe instruções. 
 A função exerce o papel central na Linguagem  */


console.log(typeof Object) // OBJETO é uma função
class Produto {} // CLASS é uma Função.
console.log (typeof Produto)

// Exemplos Básicos de Função. 

/***********************************
*******  Função sem  retorno ******
***********************************/

function imprimirSoma(a, b) {
    console.log (a + b)
}


imprimirSoma (2,4)      // Passamos os parametrs para a Função.
imprimirSoma (2)       //  Passamos apenas um parametro para a função. Neste caso retorna NaN.
imprimirSoma (2,4,5,6,7,8)  // Neste caso não ira retornar um erro ele apenas ignora os demais numeros.
imprimirSoma ( )      // Retorna um NaN.

/**********************************
*******  Função com retorno *******
***********************************/


function soma(a, b=0) {   // Definimos como padrão o valor de b para 0
    return a+b
}

console.log(soma(2,3))
console.log(soma(3))  // Retornou 3 pois definimos o valor de b como fixo em 0 

function soma1 (a, b, c=5){
return a+b+c
}
console.log(soma1(5,5)) // Retornar 15 pois determinamos o valor de c como 5.
console.log(soma) // retorna [Function: soma]
console.log(soma( ))  // retonar em NaN

