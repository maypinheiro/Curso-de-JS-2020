// Parametros e Retornos.

// Parametros e retorns são Opcionais.

// Verifiar se posso passa o NaN como verificador.  


const calcularArea = function area(altura = 0, largura = 0) {
    const area = altura * largura

    if (area > 20) {
        console.log(`Valor acima do Esperado.`)
    } else if (area > 0) {
        console.log(`O valor da Area é ${area} m², `)
    } else if (area == ' ') {
        console.log('Digite a Altura e a Largura.')
    } else {
        console.log(`Não é permitido digitar Textos.`)
    }

}






calcularArea(3, 6, 8, 7)
calcularArea(`Texto`)
calcularArea('')
calcularArea(5)
calcularArea(5, 5)
calcularArea(2, 4)
calcularArea()

const nome = {
    n1: 'mayara',
    idade: 26
} 
console.log(nome.idade)





