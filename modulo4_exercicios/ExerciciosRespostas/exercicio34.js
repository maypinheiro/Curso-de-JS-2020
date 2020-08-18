/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

//compara caracter por caracter 
// todos devem conter emambas
// se um não conter já pula para falso .
// comparoo a primeira, caso v , segunda, ...
// para commparar devo pecorrer um array. 

function comparar(p1, p2) {
    let verifica = false
    for (i1 of p1) {

        for (i2 of p2) {
            if (i1 == i2) {
                verifica = true
                break
                // podemos usar breack 
            } else {
                verifica = false
            }
        }
        if(!verifica) {
            return verifica
        }
    }
        return verifica
}
console.log(comparar(`vida`, `vavi`))