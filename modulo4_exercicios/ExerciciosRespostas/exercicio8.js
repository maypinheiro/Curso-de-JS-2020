/* 
Pedro joga N jogos de basquete por temporada.     
Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo.      [] array com a pontuacao.  ok 

Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho.      (comparar - maior e   menor ponto)

Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, 

escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor   .....

 [retorna um array  numero de vezes do recorde,  quando foi o pior. ] 

 com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).

Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
 */

function recordes(jogos) {
    let jogo = jogos.split(' ').map(Number) //.split (' ' esta tirando o espaço no array de string) // .map transforma a funcao ( Esta transformando o array de string em um array numerico.)
    let recorde = jogo[0]
    let vezesderecorde = 0

    for (let pontuacaoAtual = 1; pontuacaoAtual <= jogo.length; pontuacaoAtual++) {

        if (jogo[pontuacaoAtual] > recorde) {
            recorde = jogo[pontuacaoAtual]
            vezesderecorde++
        }

    } 
    

}
recordes('10 10 20 8 25 3 0 30 1 100 450 0 500')

