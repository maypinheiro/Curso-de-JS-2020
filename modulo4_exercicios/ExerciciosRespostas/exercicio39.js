/* Crie uma função que receba dois vetores de igual tamanho ok e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
// troque os elementos dos vetores. 

 */
function juncaodevalores(vetorA, vetorB) {
    const tamanho = vetorB.length
    if (vetorA.length == vetorB.length) {
        
        for(let elemento of vetorB) {
            vetorA.push(elemento)
        }

        vetorB = []
        for(let elemento of vetorA) {
            vetorB.push(elemento)
        }
        vetorA.reverse()
        vetorA.splice(tamanho)
        vetorB.splice(tamanho)
        console.log(vetorA)
        console.log(vetorB)

        
    } else {
        return 'Os dois vetores devem ter o Mesmo Tamnaho'
    }

    
}

let vetorA = [10,11,12]
let vetorB = [1,2,3]

juncaodevalores(vetorA, vetorB)