// Metodo Concat

// O array original não é mexido é gerado um array original que é o resultado da concatenação.
// concatenar vario array em um array , ou varios elementos

const filhas= ['Julia', 'Amanda']
const filhos =['Jó', 'Cassio']
const todos= filhas.concat(filhos)
console.log(todos)

console.log([].concat([1,2],[3,4],56,[[6,8]]))