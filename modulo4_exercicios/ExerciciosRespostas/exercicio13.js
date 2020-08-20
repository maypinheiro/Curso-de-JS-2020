/* ) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

 function verificaDia (dia) {
     switch(dia) {
         case 1 : {
             console.log(`Fim de semana - Domingo`)
         }
         break
         case 2: {
             console.log(`Dia Util - Segunda`)
         }
         break
         case 3: {
            console.log(`Dia Util - Terça`)
         }
         break
         case 4: {
            console.log(`Dia Util - Quarda`)
        break
         }
         case 5: {
            console.log(`Dia Util - Quinta`)

         }
         case 6: {
            console.log(`Dia Util - Sexta`)
         }
         case 7: {
            console.log(`Fim de Semanda- Sabado`)
         }
     }

 }
 verificaDia(7)