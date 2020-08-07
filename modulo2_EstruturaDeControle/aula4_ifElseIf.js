/* IF, ELSE, IF */

// Usamos else if para uma seleção0 mutipla.
// o PRIMEIRO IF é obrigatorio e o ultimo Else é Opcional.
// Posso usar quantos else if quizer ( forem necessario)
// Não é a estrutura Oficial para mutiplas seleçoes.



const resutado = function verificar(nota) {
     if (nota > 10) {
        console.log('Nota Invalida')
    } else if (nota >= 9) {
        console.log('aprovado com Merito')
    } else if (nota >= 7) {
        console.log('Aprovado')
    } else if (nota >= 5) {
        console.log('Recuperação')
    } else if (nota <= 4) {
        console.log('Reprovado')
    } else{
        console.log('Nota Invalida')
    }
}



resutado(1)
resutado(2)
resutado(3)
resutado(4)
resutado(5)
resutado(6)
resutado(7)
resutado(8)
resutado(9)
resutado(10)
resutado(20)
resutado(0)
resutado(-1)