/* Herança */

console.log(typeof String) //function
console.log(typeof Array)  //function
console.log(typeof Object) //function
// Todas possuiem o atributo .prototype - pois toda função tem!!!

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
// Reverter a ordem o array.
console.log('Mayara'.reverse())   



Array.prototype.first= function(){
    return this[0]
}
//pegar um elemento especifico dentro de um array
console.log([1,2,3,5].first())
console.log(['j','k','l'].first())

