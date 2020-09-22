//Operador Rest/Spread

// Se vocÊ for pegar algo e juntar é Rest  ...
// Se vocÊ for pegar algo e espalhar é Spread ...
// Usar rest com parâmetro de função 

// Usar Spreas com Objeto

const funcionario ={ nome:'Julia', salario:'3508.68'}
const clone ={ empresa:'Viva',...funcionario}
// ... significa que estou pegando todos os atributos de funcionario
// Assim vc tem uma copia, não esta mais apontando para os atributos 'originais
// o fato de  mudar qualquer qatributo no objeto clone não vai gerar nenhum impacfto em funcionario

console.log(clone)

// Usar Spread com Array

const grupoA=['Maria','João','Fabio','marcos']
const grupoB= ['Camilo','Mayara',...grupoA]
const grupoC=['Milena',...grupoB,'Joaquim']
console.log(grupoB)
console.log(grupoC)






