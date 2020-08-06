/* FOR IN  */

const notas =[10,9,6,10]

for (let notaindividual in notas) {
console.log(`Sua nota é ${notas[notaindividual]}`)
}



// Percorremos um array 


const pessoa = {

    nome: 'Mayara',
    idade: 26,
    sexo: 'femino'
}
 for (let atributo in pessoa) {
     console.log (`${atributo}=${pessoa[atributo]}`)
 }