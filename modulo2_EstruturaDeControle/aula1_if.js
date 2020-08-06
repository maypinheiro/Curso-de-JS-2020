/* Esturtura de controle
         IF  */

// Executa um bloco de código quando uma consição é verdeira
// Podemos tbm usar true e false para validar .


function aprovado (nota){
if (nota >=7){
    console.log('Aprovado com nota ' +nota)

}
}   
aprovado(4)
aprovado(8)


function verdadeiro(verdade){
    if(verdade) {
        console.log( verdade + ' é um valor verdadeiro')
    }

}
verdadeiro(NaN)
verdadeiro(3)
verdadeiro(undefined)
verdadeiro(' ')
verdadeiro ([])
verdadeiro('Hello')

/* 

Função de saque -  criado por mim.

function preco (saldo) {
    if(saldo<=valor) {
        console.log('Compra realizada')
    }
    else {
        console.log('Saldo insuficiente')
    }
}

var valor = 2
preco(10) */