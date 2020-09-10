require('./aula9_global') //paraR usar o Global , 
console.log(MeuApp.saudacao(),MeuApp.nome)

MeuApp.nome='Alterando'
console.log(MeuApp.nome)
// Não é recomendavel usar pois estes atributos não deveriam esta abertos para Mudança.
// UmA ALTERNTIVA É USAR O freeze
// Agora não mda mais pois esta Congelado!!! usamos O freeze 
// Sempre evitarde mecher no Global!!!

