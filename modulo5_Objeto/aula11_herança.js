/* HERANÇA  - funcao construtora  */

function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1= new MeuObjeto
const obj2= new MeuObjeto
console.log(obj1.__proto__===obj2.__proto__) // true
// Todos os objetos criados apartir de uma mesma função construtora são estritamente IGUAIS

console.log(MeuObjeto.prototype===obj2.__proto__)//true
MeuObjeto.prototype.nome='Ana'
MeuObjeto.prototype.falar= function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar() 



