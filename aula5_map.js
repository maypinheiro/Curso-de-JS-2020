//Map
// Mapea o array
// resulta em um outro array do mesm tamanho com os dados transformados.
// O array transformado sempre tera o mesmo tamanho.
// recebe como parametro uma função que pode ter 3 vaores
// 1a = valor atual 
// 2a= indice 
//3a = array completo


const numeros=[2,3,5,7]

// O map é um for com proposito.

let resultado= numeros.map((a,b)=>a*b)
let res=numeros.map(e=>e*3)
let result=numeros.map(e=>
   {
return e*0
   })
   console.log(result)
console.log(res)
console.log(resultado)

const soma10= e=>e+10
const triplo=e=>e*3
const paraDinheiro=e=> `R$ ${e.toFixed(2).replace('.',',')}`

const resultados= numeros.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultados)