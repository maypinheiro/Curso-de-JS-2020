// Contexto Léxico
// Contexto pelo qual as coisas foram declaradas dentro da Linguagem.



const valor = 'Global'

function minhaFuncao (){
    console.log(valor)
}
function exec (){
    const valor = 'Local'
    minhaFuncao()
}
exec()


