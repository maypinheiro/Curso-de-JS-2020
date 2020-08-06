/* Função x Objeto */

// Função é o mais Importante 
// Objeto é o 2a mais Importante 

console.log(typeof Object) // Function
console.log(typeof Function) // Function
console.log(typeof new Object) // Objeto

const cliente = function(){}
console.log(typeof cliente) //function
console.log (typeof new cliente) //Objeto

class produto {} // ES 2015 [ES6]
console.log(typeof produto) // função
console.log(typeof new produto()) // Objeto 

// Um objeto é criado apartir de uma função . 

