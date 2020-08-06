/* Operador Destructuring
 Operador de destruturação. */

// Quando usado em Objs {}



// Recurso Introduzido no ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        rua: 'rua amazonia ',
        numero: 234
    }
}
const { nome, idade}  = pessoa
console.log(nome,idade) // me retorna ana e 5 

const{nome:n, idade:i} =pessoa
console.log(n,i)   // Mev retorna Ana e 5

const{endereco: { rua, numero}} =pessoa
console.log(rua, numero)
