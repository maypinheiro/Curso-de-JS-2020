// Cidadão de Primeira Linha.
//Quando a linguagem trata a função como dado.

// Função recebe parametros e retorna um valor, 
// Toda função retorna um valor nem que seja UNDERFINED.
// Na Função Literal é OBRIGATORIO O USO DE {}  A {} SIGNIFICA UM BLOCO DE CÓDIGO.

// FORMA LITERAL DE CRIAR UMA FUNÇÃO

function teste1 () {

} 

// Armazenando dentro de uma VARIAVEL.

const teste2 = function () { }

// Armazenando dentro de um array 

const array = [function(a,b) { return a+b },teste1, teste2]
console.log(array[0](2,3))

// Armazenar em  um atributo de um objeto 

const obj ={}
obj.falar = function () {
    return 'Oie'}

    console.log (obj.falar())

// passar a função como parametro

function run (fun) {
    fun()
}

run(function(){console.log('Executando...') })

// Uam função pode retornar/Conter um função.

function soma (a,b) {
    return function (c) {
        console.log( a + b + c)
    }
}
soma(2,4)(8)  // Posso passar os parametros assim
// Ou armazer o valor da primeira em uma variavel
const valor1 = soma (2,4)
valor1(8)
