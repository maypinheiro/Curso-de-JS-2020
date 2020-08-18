/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
     */

function novoSalario(salarioAtual = 0, plano) {

     switch (plano) {
          case 'a': {
               valor = salarioAtual *0.10 
               console.log(`Seu novo Sálario é :${valor+salarioAtual}`)
               break
          }
          case 'b': {
               valor = salarioAtual * 0.15
               console.log(`Seu novo Sálario é :${valor+salarioAtual}`)
               break
          }
          case 'c': {
               valor = salarioAtual * 0.20
               console.log(`Seu novo Sálario é :${valor+salarioAtual}`)
               break

          }
          default :{
               console.log(`VocÊ não recebeu aumento`)
          }

     }


}

novoSalario (2000,'d')