/* Herança
Object.creat */
const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto',

}
const filha1 = Object.create(pai) // ele cria um novo Objeto tendo como prototypo o obj pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // me retorna Preto
console.log(filha1) // retorna { nome: 'Ana' }
const filha2 = Object.create(pai,{
    nome: {
        value:'Bia',
        writable: false,
        enumerable:true

    }
})

console.log(filha2) // { nome: 'Bia' }
filha2.nome='Carla'  // Não sobre Escreve pois foi definido writable: false,
console.log(`${filha2.nome} Tem Cabelo ${filha2.corCabelo}`) //Bia Tem Cabelo Preto

console.log(Object.keys(filha1))


for(let key in filha2){
 console.log(key)  
 // retrna  nome, corCabelo
}
// para saber se o atributo pertence ao proprio objeto ou veio por herança...

for(let key in filha2){
    filha2.hasOwnProperty(key)
     ? console.log(`Proprio: ${key}`)
     : console.log(`Por herança:  ${key}`)
}

