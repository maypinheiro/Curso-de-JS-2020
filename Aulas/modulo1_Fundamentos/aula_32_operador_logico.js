/* Operador Logico 
BINARIO.

|| ou  - Um dos dois valores devem ser Verdadeiros
&& i - As duas sentenças devem ser verdadeira. 
!=  ou exclusivo - as sentenças devem ser diferente.
*/


function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv75 = trabalho1 && trabalho2
    //const comprartv42 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprartv42 = trabalho1 != trabalho2 //Ou restrito.
    const mantersaudavel = !comprarSorvete // Negação lógica
 
    return {comprarSorvete,comprarTv75,comprartv42,mantersaudavel}

}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,false))

 