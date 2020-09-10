
// EXPORTANDO OS ARQUIVOS..
const moduloA = require('./aula2_sistemaDeModulos')
const moduloB = require('./aula2b_exportacao')

console.log(moduloA,moduloB)

console.log(moduloA.ola)
console.log(moduloB.boaNoite())

// Organização no Back end.

// Por PADRÃO tudo fica dentro do modulo e quando vc exporta aquilo fica disponivel para que for usar.
// se  o modulo estiver detro do seu projeto o modulo de acesso é o relativo
// se estiver fora o modulo de requerer é