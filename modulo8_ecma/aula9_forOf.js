//ForOF
// Intera encima de valores.

const { values } = require("lodash")


for (let letra of 'Mayara'){
    console.log(letra)
}

const assuntosEcma=['Map','Set','Promisse'] 
// me retorna so o indice
for(let i in assuntosEcma){
    console.log(i)
}

//me retorna o valor
for (let assunto of assuntosEcma){
    console.log(assunto)
}


const assuntoMap= new Map ([
    ['map',{abordado:true}],
    ['set',{abordado:true}],
    ['Promise',{abordado:false}]

])
// me retorna tudo 
for( let assunto of assuntoMap){
    console.log(assunto)
}
// me retona so a chave.
for (let chave of assuntoMap.keys()){
console.log(chave)
}
// me retorna o valor
for(let valor of assuntoMap.values()){
    console.log(valor)
}

// me retorna as entradas.
 for (let [ch,vl] of assuntoMap.entries()){
     console.log(ch,vl)
 }


 const s = new Set (['a', 'b','c'])
 for(let letra of s){
     console.log(letra)
 }
