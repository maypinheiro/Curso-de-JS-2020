// Call e Apply.
// Uma função em Js é um tipo e como tipo dentro dela ela possui varias outras funçoes.


function getPreco (imposto= 0, moeda= 'R$') {
            return `${moeda} ${this.preco * (1 - this.des) * (1 + imposto)}`
}

const produto = {
    nome:'Notebook',
    preco: 5799.99,
    des: .15,
    getPreco
}
console.log(getPreco())              // chamando a função diretamente                      // Primeira forma de Iniciar , retorna NaN    - pois não se tem acesso ao preco e ao desconto 

global.preco = 5833.00
global.des= 0.15

console.log(getPreco())            // chamando a função diretamente                     // me retorna um valor pois passei os parametros. 

console.log(produto.getPreco())   // chamando a função apartir de um Objeto       // Estou chamando apartir do Objeto.  me retorma o valor tendo como base o quw atribui no Objeto.



//////////// Usando Call  e apply///////////


const carro = { preco: 49990,  des: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro,0.17,'R$'))  // Passo  primeiro o contexto depois os parametros 
console.log(getPreco.apply(carro[0.17,'$'])) // Passo o contexto e os parametro dentro de um array. 



