 /* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida */

 function verificaCrescimento(alturaC1, taxaDeCrescimentoC1, alturaC2, taxaDeCrescimentoC2) {
     if (alturaC1 == alturaC2) {
         console.log(`As duas crianças possuem a mesma altura| Altura: ${alturaC2}cm`)

     } else {
         if (alturaC1 > alturaC2) {
             if (taxaDeCrescimentoC2 > taxaDeCrescimentoC1) {

                 return(`A criança dois ira utrapassar a Criança um em  ${calcularTempo(alturaC2,taxaDeCrescimentoC1,alturaC1,taxaDeCrescimentoC1)}`)
             }

         } else {
             console.log(`A taxa de crescimento da criança 1 é  ${taxaDeCrescimentoC1}cm , portanto, a criança dois não ira utrapassar sua altura.`)

         }
     }

 }


 function calcularTempo(menor, taxaMenor, maior, taxaMaior) {
     let tempo = 0
     while (menor < maior) {
         menor += taxaMenor
         maior += taxaMaior
         tempo++
     }
     console.log(tempo)
     return tempo
 }

 verificaCrescimento(10,5,5,13)
 console.log(verificaCrescimento(10,3,6,4))