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

obj2.nome='Rafael'
obj2.falar()
obj1.nome='Claudia'
obj1.falar()


const obj3 ={}
obj3.__proto__= MeuObjeto.prototype
obj3.nome='Fernanda Obj3'
obj3.falar()


// Resumindo ...
console.log((new MeuObjeto).__proto__ ===MeuObjeto.prototype)  //TRUE
console.log(MeuObjeto.__proto__=== Function.prototype) ////TRUE
console.log(Function.prototype.__proto__===Object.prototype) //TRUE
console.log(Object.prototype.__proto__) // null pois apos ele não tem mais ninguem 
