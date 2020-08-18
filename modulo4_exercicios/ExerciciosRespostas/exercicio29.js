/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */


function percorrer(array) {

    let dentro = 0
    let fora =0

    for (i = 0; i < array.length; i++) {
        if (array[i] > 9 && array[i] <21) {
            dentro++

        }
        else {
            fora ++
        }
    }
 return (`Dentro do intervalo de 10 -20: ${dentro} |  Fora do Intervalor: ${fora}`)
}


console.log(percorrer([10,10.2,50,70]))