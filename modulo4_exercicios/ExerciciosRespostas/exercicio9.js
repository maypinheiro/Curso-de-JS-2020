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



