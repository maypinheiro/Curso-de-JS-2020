//////// Arrow function ////////

// Possui uma sintaxe mais reduzida.
// Prioriza a ideia de ser ter funçoes com uma unica linha.
// funçoes arrow são funcoes anonimas , ou seja vc não pode atribuir um nome
// ou seja vc atribui a função para uma variavel ou constante.

const soma =(a,b) => a+b
console.log(soma(2,4))

// quando se tem um unico parametro vocÊ não é obrigado  a colocar os parenteses
const nota = n => n+6
console.log(nota(4))

// quando se coloca um corpo na função Obrigatoriamente tem que colocar um retorno.

const subtracao =(d,e) =>{
    return d-e
}
 console.log(subtracao(4,2)) 


////////Arrow function ( this)////////
 // ela esta associada ao local onde foi escrita, uma vez que esta função  de um modulo , dentro de um arquivo do node
 // significa que o this sempre ira aponta para exports, ou module.exports
 
 const lexico1=()=>console.log(this=== exports) //true
lexico1()

// quando se tem uma função tradicional o this pode variar deacordo com a chamada da função
// com a funçao arrow sempre apontara para o contexto local.


//////// parametro defaut//////////

// é a capacidade de dentro de uma atributo você definir um valor padrão para ele.
// caso o valor passado seja underfined ele assume o valor padrão

 function teste (texto= 'Testando'){
     console.log(texto)
 }
 teste() //Testando
 teste(undefined) //Testando
 teste('casa')  //casa
teste(null)//null


//////// operador rest ////////
// vocÊ possui parametros variados, e estes parametros serão agrupados em um array internamente
// dentro da função

function total(...numeros){
    let total= 0
    numeros.forEach(n => total+=n )
    return total
}
console.log(total(5,5,6))
