/* Funçoes Importantes dentro de OBJETO */

const pessoa={
    nome:'Rebeca',
    idade: 3,
    peso:20
}

console.log(Object.keys(pessoa)) // Me retorna todas as Chaves.  nome,idade,peso
console.log(Object.values(pessoa)) // Me retorna todos os Valores. Rebeca, 3 , 20
console.log(Object.entries(pessoa)) // Me retorna um array composto de arrays com as chaves e o valor [['nome','rebeca'],['idade','3'],['peso','20']]

// percorrendo o array
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}:${e[1]}`)
    
})
Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}:${valor}`)
    
})
// Os dois retornam a mesma coisa 


// Definindo as Propriedades DE UM objeto.  metodo - defineProperty

Object.defineProperty(pessoa,'dataDeNascimento',{

    enumerable:true,  // Se a propriedade sera listada
    writable:false,  // Se aceita modificacao.
    value: '01/01/2018'
})
pessoa.dataDeNascimento='12/09/2013'   
console.log(pessoa.dataDeNascimento) // vai me retornar '01/01/2018' pois definimos no metodo que o valor não poderia ser alterado
console.log(Object.keys(pessoa))



// Object.assign (ECMAScript 2015)

const dest ={ a:1}
const o1={b:2}
const o2={c:3}
const o3={j:2,d:6,a:9}
const obj= Object.assign(dest,o1,o2,o3)  // gera a concatenacao dos objestos
console.log(obj)   // me retona  todos os objs concatenados, posso chamar o dest que tbm me retornara todos concatenados, caso um obj já tenha sido declarado ele subscreve

Object.freeze(obj)
obj.c=123
console.log(obj) // neste caso não sobre escreve o C pois eu congeleio o valor. 

