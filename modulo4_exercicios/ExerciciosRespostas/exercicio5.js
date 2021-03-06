/* ) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta.
 Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
 */

let arrumar = 0.1 + 0.2

function dinheiroCerto (arrumar) {
    return arrumar.toFixed(2).replace('.',',')
}

console.log(`R$ ${dinheiroCerto(arrumar)}`)


////////////////   Refeito   ////////////////////
function virgulaEdoisCaracteresAposVirgula (numero) {
    return numero.toFixed(2).replace('.',',')
}

let numero=0.45+0.1
console.log(`R$ ${virgulaEdoisCaracteresAposVirgula(numero)}`)
console.log(virgulaEdoisCaracteresAposVirgula(20))

