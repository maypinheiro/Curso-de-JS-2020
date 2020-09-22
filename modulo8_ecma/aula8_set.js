// Set 
/* é uma estrutura não indexada que não aceita repetição */

const { time } = require("console")

const times= new Set()

times.add('Vasco')
times.add('Flamengo')
times.add('São Paulo').add('Corinthians').add('Botafogo').add('Internacional').add('Gremio')
times.add('Rubrão')
times.add('Vasco')
console.log(times)
console.log(times.size) // informa o tamanho
console.log(times.has('Vasco')) // Informa se possui aquele elemento
 times.delete('São Paulo')

console.log(times)

const nomes =['Raquel','Julia','Paulo','Raquel','Julia']
const nomesSet= new Set(nomes)
console.log(nomesSet)