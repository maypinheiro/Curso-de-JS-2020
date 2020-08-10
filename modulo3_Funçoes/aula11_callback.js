// callback 
// Chamar de VOLTA .

// Padrão Mais usado na WEB .
// Callbsck é passar uma função que sera chamada quando um evento acontecer.


const fabricantes = ["MERCEDES", "AUDI","BMW"]

function imprimir(nome, indice) {
    console.log (`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //forEach chama a função.

fabricantes.forEach(imprimir2 => console.log(imprimir2)) // Criei outra função 




