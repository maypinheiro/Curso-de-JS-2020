
/* Você pode armazenar uma função dentrode uma variavel */


//Função anonima são funções sem nome

// Armazendo uma função dentro de uma variavel. 
 const imprimirSoma = function (a,b){
     console.log (a+b)
 }
 imprimirSoma(2,3)

// Armazenando uma função Arrow em uma variavel.

const soma =(a,b) =>{
    return a + b
}
console.log(soma(2,3))

// retorno Implicito
const subtracao =(a,b) => a-b
console.log(subtracao(2,3))

const imprimira = a => console.log(a)

imprimira('Testes') 