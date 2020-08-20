
/* Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
 */
function resutadoFinal(nota) {
    if (nota > 48) {
        if (nota % 5 == 0) {
            console.log(`Sua Nota Exata é :${nota}`)
        } else {
            if ((nota + 3) % 5 == 0) {
                nota = nota + 3
            } else if ((nota + 2) % 5 == 0) {
                nota = nota + 2
            } else if ((nota + 1) % 5 == 0) {
                nota = nota + 1
            }
            console.log(`Sua Nota é :${nota}`)
        }
    } else {
        console.log(`Reprovado por Média`)
    }
}




resutadoFinal(51)


function resultado(nota) {
    if (nota > 47) {
        if (nota % 5 == 0) {

        } else {
            if ((nota + 1) % 5 == 0) {
                nota = nota + 1
            } else if ((nota + 2) % 5 == 0) {
                nota = nota + 2
            } else if ((nota + 3) % 5 == 0) {
                nota = nota + 3
            }

        
        }

        console.log (`Aprovado media ${nota}`)
    } else {
        console.log(`Você não Atingiu a media minima para aprovação! ${nota}`)
    }
}



