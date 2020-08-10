//Closures


/* Clousere é o escopo criado quando uma função é declarada 
Esse escopo permite a função acessae e manipula  variaveis externas á função*/

// Contexto Léxico em Ação.

const x = 'Global'

function fora (){
    const x = 'local'
    function dentro (){
        return x
    }
    return dentro
}

const minhaFuncao = fora ()
console.log(minhaFuncao())
