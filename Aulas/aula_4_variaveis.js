/* Variaveis O básico de
var,
let e
const.
 */   


  /* var     Não devemos usar pois apresenta um problema em aceitar varias declaraçoes;
     let:    Devemos usar; Só aceita uma atribuição; usadas quando queremos declarar valores que iram se alterar.
     const:  So aceita uma atribuição e uma declaração. usamos para valores fixos. */


/*     Var:   Não é recomendado o seu uso; Pode ser declarada mais de uma vez. Retorna o ultimo valor a ela atribuido. */

var a = 20
var a = 30
console.log(a, a) 
// Neste caso retorna 30 
var a = 50
console.log(a)
 // neste caso retorna 50

 /*   let : Uso recomendado; Não permite sua declaração 2x. */

let b = 20 
let b = 30 
console.log(b)
//nos retorna um erro pois já declaramos 

let c =30
console.log(c,) 
// assim nos retorma  30. Pois  a variavel foi declarada apena 1x
 c = 40
 console.log (c)
 // Nos retorna 40 , pois é o valor que atribuimos para ela neste momento. Ou seja ela não foi redeclarada , apenas alteramos o seu valor. 

 /*  constant: Seu valor não pode ser alterado. */

const e = 6
const e= 7
// Nos retorna um erro pois seu valor é constante não se altera. Usamos para valores fixos. Que não se Alteram. exemplo: o valor de pi sempre sera 3,14, o calculo da Area de um triangulo sempre serA B*A/2.

const f =7
// f semrpre ira valer 7.

