// Objeto Constante.

//  Esta const esta apontando para o endereço de memoria . 
// pessoa -> 123

const pessoa ={
    nome:'José'
}
pessoa.nome='Mayara'
console.log(pessoa)  // Retorna Mayara 

/* pessoa={nome:'Fabio'}
console.log(pessoa) // Me retorna um erro , pois estou tentando mudar o endereço de pessoa, pessoa já foi atribuido
  */

// freeze congela o Objeto, uma vez que uso não consigo mais fazer alterações nele.
Object.freeze(pessoa)
pessoa.nome='Carlos'
console.log(pessoa) // me retorna Mayara pois eu congelei, impossibilitando Aleraçoes.
pessoa.end= 'Rua k'
console.log(pessoa) // Me retorna Mayara pois tbm congela para adicao de novos elementos.
delete pessoa.nome  // Naão vai permitir pois o uso do freeze bloqueia qualquer colisitação


// Criando o freezer ja na constante.


const pessoa2 =Object.freeze({
    nome:'Mariana',
    sexo:'f'
})
console.log(pessoa2) // Retorna  nome: MARIANA, sexo: F

pessoa2.nome= 'Fabricio'
console.log(pessoa2)  // Retorna Novamente nome: MARIANA, sexo: F

