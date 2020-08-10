// Função Factory.
//é uma função que retorna um BJETO.

// Factory Simples.

function criarPessoa (){
    return {
        nome:'Mayara',
        idade: 26,

    }
}
console.log(criarPessoa())



function criarProduto (nome, preco){
    //poderiamos já ficar o desconto no parametro
    return {
   nome,
   preco,
   desconto:0.1
    }
}

 console.log(criarProduto('Notebook', 2199.45))
 console.log(criarProduto('Tv', 3000.50))
 console.log(criarProduto('Ipad', 199.45))
