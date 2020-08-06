// Bollean

//  isAtivo refere-se a Bolleanos
// Quando colocamos !! na frente da expressão o console retorna se ela é false ou true.

/* console.log ('Exemplo de Verdadeiros') //String
console.log(!!3)          //Numero
console.log(!!-3)        //Número Negativo
console.log(!!' ')      //String com Espaço
console.log(!!'texto')  // String
console.log(!![])       //Array
console.log(!!{})       //Função
console.log(!!Infinity) //Infinity

console.log ('Exemplo de False') */

console.log(!!0) // 0
console.log(!!NaN) //nAN
console.log(!!undefined) //Underfined
console.log(!!'') //false
console.log(!!null) //nulo

// Exemplo com de ou ||  onde apenas uma express~~ao deve ser verdadeira para a sentença ser verdadeira.
console.log (!!(''|| null || 0 || ' '))


// Neste exemplo para ser verdadeiro uma das expresões deve ser falsa.
console.log(!(3 || ' ' || [] || {} || Infinity))
 
// Neste caso ele vai me retornar o primeiro valor verdadeiro que ele encontar
console.log ((0 || '' || [] || {} || Infinity))


// Colocando operação logica

let nome =""
console.log(nome || 'Preencha o seu nome no local indicado')
// Neste caso retornou  a msg  pois não atribuimos um nome. 


nome ="Camilo"
console.log(nome || 'Preencha o seu nome no local indicado')
// Nos retornou Camilo pois atribuimos um nome. 



console.log ( 0 || 'mayara')
// Vai retornar a string que neste caso é 'mayara' pois é o primeiro valor verdadeiro.
