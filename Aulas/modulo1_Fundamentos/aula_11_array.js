//Array

// Forma de agrupar multiplos valores apartir de um unica declaração
// Localizamos os valores pelo index que se inicia em 0 .
// aceita variaveis de diversos tipos
//é flexivel. 
// Criamos entre [] e separamos os elementos por , 
// Uma aray é do tipo Objeto.
//NÃO É RECOMENTADO MISTURAR OS DADOS.
// .push ADICIONA NOVOS ELEMENTOS A UM ARRAY
//.length QUANTOS ELEMENTOS TENHO EM UM ARRAY
//  .pop ME MOSTRA O ULTIMO VALOR EXCLUINDO -O 
// .concat () concatena duas ou mais string. 



const valores = [8.8, 6.9, 6.0, 22.5]
console.log(valores[0],valores[2])                  // Vai retornar o valor 8.8  e 6
console.log(valores[9])                             //retornar underfined - pois este valor não foi associado 

/* Podemos incluir mais elementos */
 
valores[4] = 10                                   // pelo indice - colocamos o valor dez na possição 4
console.log(valores)

valores.push({id:3},false,'teste')               //Usamos p9- para adicionar novos elementos em um Array.
 console.log(valores)
console.log(valores.length)                     // length informa quantos elementos eu possuo no array
console.log(valores.pop())                     //Me mostra o ultimo valor do Array excluindo ele 
console.log(valores)              
delete valores[5]                            //deleta o valor no indice indicado
console.log(valores)   
console.log(typeof valores)                  // Array é do tipo Objeto. 





