// Tipos de Declaraçoes em JS.


// Function declaration

// Pode ser lida antes de ser Criada. Pois O js primeiro carrega todas as funçoes e depois vem lendo o código

console.log(soma(2,4))

function soma(x, y) {
    return x + y
}

// Function Expression 
// Só posso chamar apos declarar.
 
const sub = function (x,y) {
    return x - y
}
console.log(sub(5,2))

// named function expression  - Forma  menos Usada.
// Só posso chamar apos declarar.

const mult = function mul (x,y){
    return x * y
}
 console.log(mult(3,3))
