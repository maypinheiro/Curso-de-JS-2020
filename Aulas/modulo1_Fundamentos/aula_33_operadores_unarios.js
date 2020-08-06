/* Operadores Unários 

Incremento
  ++ ( adiciona uma unidade ao elemento)
Decremento
 -- ( subtrai uma unidade ao elemento  )

 n++  Forma pós fixada
--n Forma pré fixada     | A forma pré fixada tem prioridade na Ordem de precedencia. 


!!! ATENÇÃO , não colocar incremento dentro de comparação !!
*/



let n1 =1
let n2 =9
n1++                    // Adiciona uma unidade no elemento. for Pós fixada.
console.log(n2)
--n1 
                 // Retira uma unidade do elemento ( forma pré fixada)
console.log(n1)
console.log (++n1 === n2--) // True - Primeiro sera incrementado  o 1 em n2 - depois comparado com n2 e por ultimo declementado o n2 
console.log(n1===n2) // False
console.log (++n1 === --n2) // False. 
console.log(n2)
