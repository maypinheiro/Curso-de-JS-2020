/* hoisting */
// Joga a variavel para cima.  Só ocorre com Var.

console.log('a=',a)  // retorna underfined
var a =2
console.log('a=',a) // retorna 2 

console.log('b='b) 
let b =2 //gera um erro 

console.log (b) // Aqui  imprime b pois foi declarado .
