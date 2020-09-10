const contadorA = require('./aula6_instanciaUnicaNovaInsancia.')
const contadorB = require('./aula6_instanciaUnicaNovaInsancia.')

const contadorC= require('./aula7_instanciaUnica')()
const contadorD= require('./aula7_instanciaUnica')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)
// O valor foi alterado .

contadorC.inc()
contadorC.inc()
console.log( contadorA.valor,contadorD.valor, contadorC.valor)
// Valor Não Alterado
