/* Faça um algoritmo que calcule o fatorial de um número.
 */

function calculaFatorial(numero) {
    let fatorial= numero
    for (n = 1; n < numero; n++) {
        fatorial = fatorial*n
    }
    return fatorial
}
console.log(calculaFatorial(9))
