//Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

function dividir(dividendo, divisor) {
    console.log(dividendo / divisor)
    console.log(dividendo % divisor)
}

dividir(10, 5)

function divisao(dividendo, divisor) {
    let resutado = dividendo / divisor
    let resto = dividendo % divisor
return `${dividendo}/ ${divisor}= ${resutado}; sobra =${resto}`
}
console.log(divisao(10, 5))