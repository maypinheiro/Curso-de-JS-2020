// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

function calcular (a,b){
    console.log(`${a} +  ${b}= ` +(a+b)) 
    console.log(`${a} -  ${b}= ` +(a-b))
    console.log(`${a} *  ${b}= ` +(a*b))
    console.log(`${a} /  ${b}= ` +(a/b))
}
calcular(20,2)


function operacoesMatematicas(primeiroNumero,segundoNumero){
   let adicicao= primeiroNumero+segundoNumero
   let subtracao=primeiroNumero-segundoNumero
   let mutiplicacao=primeiroNumero*segundoNumero
   let divisao=primeiroNumero/segundoNumero

  console.log(adicicao,subtracao,mutiplicacao,divisao)
}
(operacoesMatematicas(20,2))

