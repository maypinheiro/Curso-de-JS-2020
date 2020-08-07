let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global )

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this===param)
comparaComThisArrow(global)

// O this dentro de uma função tradicional varia de acordo com a chamada.
// o this no arrow  aponta para um objeto recorrente, o arquivo onde a função foi definida
// Ele não sofre variação de forma alguma. mesmo com o BIND

comparaComThisArrow(module.exports)

comparaComThisArrow =comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)