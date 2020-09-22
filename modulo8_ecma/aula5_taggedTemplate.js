// Tagged Template 

// template string é a capacidade de interpolar uma variavel dentro de uma string delimitado por `` (crase- back tick)

// Tag de template
// é o processamento do tamplete String apartir de uma função.

function tag(parte,...valores){
    console.log(parte) //[ '', ' esta ', '' ]
    console.log(valores) //[ 'Gui', 'Aprovado' ]
    return 'Outra String'
}
const aluno='Gui'
const situacao='Aprovado'
console.log(tag`${aluno} esta ${situacao}`) //Outra String'