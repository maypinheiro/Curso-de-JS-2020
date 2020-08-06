/* Operador Destructuring
 Operador de destruturação. */

 ////Quando usa em array []

 const [a] = [10]
 console.log(a)
 const [n1, ,n3,  ,n5, n6 = 0] = [2,6,9,1] 
 console.log(n1,n3,n5,n6)
 
 const[,[ , nota]] = [[,8, 8],[9,6,8]]
 console.log(nota)