/* Elabore duas funções:
 que recebem três parâmetros: capitalInicial, taxa de juros e tempo de aplicação.

A primeira função retornará o montante da aplicação financeira sob o regime de juros simples.
e a segundaretornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples (capitalInicial, taxaDeJuros,tempoDeAplicação){
    return capitalInicial*taxaDeJuros*tempoDeAplicação

}

function jurosComposto (capitalInicial, taxaDeJuros,tempoDeAplicação){
    return capitalInicial*(1+taxaDeJuros)*tempoDeAplicação

}
console.log(jurosSimples (500, 0.3, 5))
console.log(jurosComposto(500, 0.3, 5))
