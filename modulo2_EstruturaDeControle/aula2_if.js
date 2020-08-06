/* IF */
/* Não associe ; a uma estrutura de controle.
   Sempre use {} PARA delimitar a estrutura de controle.
*/ 
  

function verificar (numeros){
    if (numeros<=10) 
    console.log('Número Valido')
    console.log('Número verificado')
}

verificar(20)
// Quand não usamos {} para delimitar a expresso ele ropa apena a primira linha, por isto o     console.log('Número verificado') sempre  sera
//executado , por isto semore use {} para delimitar a estrutura 

// Exemplo de ;    NUNCA USAR .

 // NUNCA USAR 
function ponto (n) {
    if (n<=3); {  // Neste caso o ; quebrou  a sentença  ou seja a condição esta vazia  e o  console.log('Validado') sempre sera executado pois não pertence a condição.
    console.log('Validado')
    }
}
/* é o mesmo que:

function ponto (n) {
    if (n<=3)

    ;
    console.log('validado')
}

*/
ponto(100)
