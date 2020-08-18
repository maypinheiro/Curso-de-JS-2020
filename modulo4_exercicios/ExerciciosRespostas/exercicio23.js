/* ) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */
//leia o codigo 
// 3 notas 
// media ponderada 
// maior nota *4  
// nota *3
// nota *3     ook

// Imprimir  codigo,  n1,n2,n3 - media - aprovado ou reprovado

// media >=5 aprovado. 
// <5 reprovado . 

// ler cod e 3 notas .

// Posso criar um objeto - 

function calcularNota(codigo, n1, n2, n3) {

   
        if (n1 > n2 && n1 > n3) {
            let res = (n1 * 4) + (n2 * 3) + (n3 * 3)
            let med = res / 10
            console.log(`Aluno ${codigo}|Suas notas foram: ${n1}, ${n2}, ${n3} |Sua média foi:${med}`)
            if (med >= 5) {
                console.log(`Aprovado`)

            } else {
                console.log(`Reprovado`)
            }



        } else if (n2 > n1 && n2 > n3) {
            let res = (n2 * 4) + (n1 * 3) + (n3 * 3)
            let med = res / 10
            console.log(`Aluno ${codigo}|Suas notas foram: ${n1}, ${n2}, ${n3} |Sua média foi:${med}`)
            if (med >= 5) {
                console.log(`Aprovado`)

            } else {
                console.log(`Reprovado`)
            }
        } else if (n3 > n1 && n3 > n2) {
            let res = (n3 * 4) + (n1 * 3) + (n2 * 3)
            let med = res / 10
            console.log(`Aluno ${codigo}|Suas notas foram: ${n1}, ${n2}, ${n3} |Sua média foi:${med}`)
            if (med >= 5) {
                console.log(`Aprovado`)

            } else {
                console.log(`Reprovado`)
            }

        } else if (n1 == n2 == n3) {
            let res = (n3 * 4) + (n1 * 3) + (n2 * 3)
            let med = res / 10
            console.log(`Aluno ${codigo}|Suas notas foram: ${n1}, ${n2}, ${n3} |Sua média foi:${med}`)
            if (med >= 5) {
                console.log(`Aprovado`)

            } else {
                console.log(`Reprovado`)
            }

        }
        else {
            console.log(`Aluno ${codigo}|Suas notas foram: ${n1}, ${n2}, ${n3} |Sua média foi:${n1}`)

        }
      

}
calcularNota(45, 0, 1, 10)