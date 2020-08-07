/* Arrow Function */
// Sempre é uma função Anonima.


let dobro = function (a) {
    return 2 * a
}
console.log(dobro(16))

dobro = (a) => {
    return 2 * a
}
console.log(dobro(10))

dobro = a => 2 * a //funcoes de uma unica linha.  // retorno implicito
console.log(dobro(Math.PI))

let ola =function () {
    return 'Ola'
}
console.log (ola())


ola= () => 'Olá'   // Arrow // Função sem parametro temos que colocar o parametro vazio.
console.log(ola())


ola=_=>'Ollá' //possui um parametro _
console.log(ola())


idade=(anoAtual, anoNascimento) => anoAtual - anoNascimento
console.log(idade(2020,1994))

saldo =(saldoinicial,valordacompra) => valordacompra - saldoinicial
console.log(saldo(50,200))

