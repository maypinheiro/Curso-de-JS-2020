// tagge Template 
// Objetivo complorar o parse apartir de uma função 

const { compact } = require("lodash")


function real(partes,...valores){
    const resultado=[]
    valores.forEach((valor,indice)=>{
     valor=isNaN(valor)? valor: `R$ ${valor.toFixed(2)}` 
     resultado.push(partes[indice],valor)  
    })
    return resultado.join('')
}

const preco=20.2
const precoparcela=10.1
console.log(real`1x de ${preco}, ou 2x de ${precoparcela}`)