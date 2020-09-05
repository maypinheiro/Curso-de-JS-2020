// forEach
// PERCORRENDO UM ARRAY. 
// forEach RECEBE UMA FUNCAO COMO PARAMETRO. QUE PODE OU NÃO TER PARAMETROS

const aprovados =['Ana','Marcia','Paula','Adriana','Sofia']

aprovados.forEach(function(nome,indice){
    console.log(`${indice+1}) ${nome}`)
})

// Arrow function.
aprovados.forEach(nome=> console.log(nome))


// Guardando a função dentro de um avariavel e chamando a como parametro.
const exibirAprovados= nome=> console.log(nome)
aprovados.forEach(exibirAprovados)
