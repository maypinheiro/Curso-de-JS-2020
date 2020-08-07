// Funçoes Anonimas.
// Função Anonima é uma função sem nome  
// Arrow Sempre sera uma Função Anonima. 

const soma = function (x,y) {
    return x + y
}


const imprimirResultado = function( a,b, operacao= soma) {
    console.log(operacao(a,b))
}


imprimirResultado(3,4)
imprimirResultado(3,4,soma)
imprimirResultado(3,4, function(x,y){
    return x-y
})

imprimirResultado(3,4,(x,y) => x * y)


// Function Anonima com Obj.  Vc Acessa a função anonima apartir do Atributo do Objeto. 

const pessoa = {
    falar (){
        console.log ('OOPAA')
    }
}
pessoa.falar()
    