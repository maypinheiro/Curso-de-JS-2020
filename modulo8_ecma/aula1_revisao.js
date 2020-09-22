// Revisão 

const { Console } = require("console")

// Let x const

/*  var possui dois escopo 
- função ou global. 
let: Possui escopo de bloco, mesmo que algo  esteja dentro de uma função, dentro de um bloco seja dentro de um laço for, etc.. O let tem escopo de bloco
 */

 {
     var a = 2
     let b =3
  
 }

 console.log(a)
 //Console.log(b)  // ReferenceError: b is not defined
 // Pois ela não esta definida nest bloco. 


 // template String 
  // Delimitação da string com crases ``
  // Dentrro do template  coloca-se variaveis apartir do dolar delimitado por chabves ${}
  // quando for interpletado sera interpolado o valor da variavel
// VocÊ consegue fazer quebra de linha.
const produto= 'Ipad'
console.log(`${produto} é
 caro`)

 // Destructuring.
 // é a forma  desestruturar (de Tirar de dendro) de uma strutura algo.
 // seja, objeto, array,string  

 const [l,e,...tras]=`mayara`
 console.log(l,e,tras) //m a [ 'y', 'a', 'r', 'a' ]


 const [x,y]= [1,2,3]
console.log(x,y) //1 2

 const [c, ,d]= [1,2,3]
console.log(c,d) //1 3

 

const{idade, nome}={ nome:'Ana', 'idade':6}
console.log(nome,idade)
 



