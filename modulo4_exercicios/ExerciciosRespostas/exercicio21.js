/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function planodesaude(idade) {
    if (idade < 10) {
        valor = 100 + 80
        console.log(`Plano 1 - Valor  R$:${valor}`)
    } else if (idade<31) {
        valor=100+50
        console.log( `Plano 2- Valor  R$:${valor}`)
    } else if (idade<61) {
        valor=100+95
        console.log(`Plano 3- Valor R$:${valor}`)
    } else {
        valor=100+130
        console.log(`Plano 4- Valor  R$:${valor}`)

    }

}

planodesaude(30)
