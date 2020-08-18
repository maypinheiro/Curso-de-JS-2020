 /* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida */

 function verificaCrescimento(alturaC1, taxaDeCrescimentoC1, alturaC2, taxaDeCrescimentoC2) {
     if (alturaC1 == alturaC2) {
         console.log(`As duas crianças possuem a mesma altura| Altura: ${alturaC2}cm`)

     } else {
         if (alturaC1 > alturaC2) {
             if (taxaDeCrescimentoC2 > taxaDeCrescimentoC1) {
             

                     console.log(`A criança dois ira utrapassar a criança ${novaaltura1}`)
                 }


             } else {
                 console.log(`A taxa de crescimento da criança 1 é  ${taxaDeCrescimentoC1}cm , portanto, a criança dois não ira utrapassar sua altura.`)

             }
         }

     }

 
 verificaCrescimento(180, 5, 160, 4)