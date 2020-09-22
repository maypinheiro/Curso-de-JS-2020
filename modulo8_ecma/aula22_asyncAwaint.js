const {
    reject
} = require("lodash")

// 
function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max)[max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min

        if (numerosProibidos.includes(aleatorio)) {
            reject('Número Repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSema(quantidadeNumero,tentativa=1) {
        try {
            const numeros = []
            for (let _ of Array(quantidadeNumero).fill()) {
                numeros.push(await gerarNumerosEntre(1, 60, numeros))
                
            } 
            return numeros

        }catch (e) {
            if(tentativa>10){
                throw "ERRO"

            } else {
                return gerarMegaSema(quantidadeNumero,tentativa +1)
            }

            }

}

        gerarMegaSema(11)
            .then(console.log)
            .catch(console.log)