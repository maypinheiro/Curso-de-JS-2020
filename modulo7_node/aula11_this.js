// This

// this

console.log(this ===global) // false
console.log(this ===module) // false

console.log(this ===module.exports) // true
console.log(this === exports) //true


function logThis(){
    console.log('Dentro da FUNCAO')
    console.log(this===exports) //false
    console.log(this.module.exports) // false
    console.log(this===global)// true
}
// dentro de uma função o this aponta para GLOBAL.
// dentro de uma função do THIS não aponta para exports
logThis()