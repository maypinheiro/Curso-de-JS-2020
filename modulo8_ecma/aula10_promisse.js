const {
    reject
} = require("lodash");
// Promisses 

const {
    resolve
} = require("path");

/*  é uma estrutura que tem  por objetivo representar uma operacao assincrona, e trabalha com o conceito da promessa que pode ser respondida ou rejeitada.
Usada quando se quer ter um processamento assincrono
se refer a uma promessa, que algo ira retonar , a promessa pode ser cumprida ou rejeitada */
//o resolve so aceita um parametro

function falaarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(frase)
            }, segundos * 1000)
    })
}

falaarDepoisDe(2, 'Processado')
    .then(frase => frase.concat('!'))
    .then(outraFrase => console.log(outraFrase))



function falar2(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(frase)
        }, segundos * 1000)
    })
}
falar2(2,'teste2')
.catch(e=>console.log(e))  // forma de tratar um erro.
