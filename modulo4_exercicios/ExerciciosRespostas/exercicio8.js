let pontuacao = '30, 40, 20, 4, 51, 25, 42, 38, 56, 0'
 
 
function avaliaPontuacoes (pontuacao) {
    let pontuacoes = pontuacao.split(',')
    let quebraderecord = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            quebraderecord++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [quebraderecord, piorJogo]
}
 
console.log(avaliaPontuacoes(pontuacao))