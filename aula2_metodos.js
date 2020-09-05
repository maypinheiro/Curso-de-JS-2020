// Array

// metodos 
const pilotos=['Vettel','Alonso','Raikkonen','Massa']

// remover o ultimo elemento. | .pop()
pilotos.pop()
console.log(pilotos)

// Adicionar um elemento a ultima posicao | .push()
pilotos.push('Mayara')
console.log(pilotos)

// Remover o primeiro elemento | .shift()
pilotos.shift()
console.log(pilotos)

// Adiciona na Primeira Posição.
pilotos.unshift('Camilo')
console.log(pilotos)


// Splice pode adiionar elemento e remover

// adicionar 
pilotos.splice(2,0,'Massa', 'verstappen')
console.log(pilotos)

// remover  
pilotos.splice(3,1)
console.log(pilotos)


/// slice()  gera um novo array apartir do indice que vxx esta passando

// pegamosum pedaço do array o primeiro indece é o que quero é o segundo ate onde eu quero  excluindo o  ultimo numero não entra.
const algunsPilotos1=pilotos.slice(2)
console.log(pilotos)
console.log(algunsPilotos1)


const algunsPilotos2=pilotos.slice(3,4)
console.log(algunsPilotos2)