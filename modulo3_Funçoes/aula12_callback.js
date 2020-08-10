const notas = [7.7, 6.5, 3.4, 7.1, 9.0, 2.1]

// Sem Callback

let notasBaixas1 = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Com Callback

const notasBaixas2 =notas.filter(function (nota) {     // filter vai verificar cada elemento sem precisar criar outro array.
    return nota < 7
})
console.log(notasBaixas2)

// Callback com arrow function

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// Exemplo com const fixa
const notasMenorQueSete = nota => nota < 7
const notasBaixas4= notas.filter ( notasMenorQueSete)
console.log(notasBaixas4)