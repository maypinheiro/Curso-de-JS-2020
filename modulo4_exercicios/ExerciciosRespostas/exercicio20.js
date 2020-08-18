/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */
// let banco= [100,50,10,5,1]

function saque(valor) {
    let contador1 = 0
    let contador2 = 0
    let contador3 = 0
    let contador4 = 0
    let contador5 = 0

    while (valor >= 100) {
        valor = valor - 100
        contador1 = contador1 + 1
        //console.log(`${contador1}R$:100`)

    }

    while (valor >= 50) {
        valor = valor - 50
        contador2 = contador2 + 1
        //console.log(`${contador2}R$:50`)


    }

    while (valor >= 10) {
        valor = valor - 10
        contador3 = contador3 + 1
        //console.log(`${contador3}R$:10`)
    }


    while (valor >= 5) {
        valor = valor - 5
        contador4 = contador4 + 1
        //console.log(`${contador4}R$:5`)
    }


    while (valor >= 1) {
        valor = valor - 1
        contador5 = contador5 + 1
        // console.log(`${contador5} R$:1`)
    }

    //console.log(contador1, contador2, contador3, contador4, contador5)
    if (contador1)
        console.log('Notas de 100: ' + contador1)
    if (contador2)
        console.log('Notas de 50: ' + contador2)
    if (contador3)
        console.log('Notas de 10: ' + contador3)
    if (contador4)
        console.log('Notas de 5: ' + contador4)
    if (contador5)
        console.log('Notas de 1: ' + contador5)

}
saque(470)