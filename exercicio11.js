/* As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;   an
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
 */

function verificaAno(ano) {

    if (ano % 400 == 0) {
        console.log(`O ano ${ano} é Bissexto`)
        return true // é Bissexto

    } else if (ano % 100 == 0) {
        console.log(`O ano ${ano} não é Bissexto`)
        return false //não é bissexto
    } else if (ano % 4 == 0) {
        console.log(`O ano ${ano} é Bissexto`)
        return true // é Bissexto
    } else {
        return false
    }  

}


(verificaAno(1500))