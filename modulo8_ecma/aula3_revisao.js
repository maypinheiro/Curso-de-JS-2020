// Recurso para Objetos
//ES8: Object.values/Object.entries

const obj={ a:1,b:2,c:3}
console.log(Object.values(obj)) //[ 1, 2, 3 ]
console.log(Object.keys(obj)) //[ 'a', 'b', 'c' ] // já tinha esta função
console.log(Object.entries(obj)) //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Melhorias na Notação Literal de Objetos

const nome= 'Mayara'
const pessoa ={
    nome,
}
console.log(pessoa) //{ nome: 'Mayara' }

const nome2='Camilo'
const pessoa2={
    nome2,
    // criando uma função dentro do obj
    ola (){
 return `Bom dia ${nome2}`
    }
}
console.log(pessoa2.ola()) //Bom dia Camilo
console.log(pessoa2.nome2) // Camilo



// Class
// Internamente é convertida para função.

class Animal{}  // Criando a class
// extends é a palavra reservda para informa herança
class Cachorro extends Animal{
 falar (){
     return `Au`
 }
}

console.log(new Cachorro().falar())
 