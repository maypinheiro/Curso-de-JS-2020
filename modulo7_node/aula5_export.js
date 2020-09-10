// Export .

console.log(module.exports) // {}  vem com um obj vario
console.log(module.exports == this) //true
console.log(module.exports ==exports) //true

// atribuindo a exports

this.a =1
exports.b=2
module.exports.c=3

exports=null  // não vai pegar.
console.log(module.exports)
// retorna { a: 1, b: 2, c: 3 }

exports ={
    nome:'teste'
}  // não vai pegar 
console.log(module.exports)
// Continua retornando { a: 1, b: 2, c: 3 }

module.exports= {
    livro: 'Romance'
}
console.log(module.exports)
// retorna - { livro: 'Romance' }

// para fazer auteração no exports temos que passar 
// module.exports 

