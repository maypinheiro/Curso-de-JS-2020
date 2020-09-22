//Tratamento de ERROS

function funcionarounão (valor,chancedeerro){
return new Promise((resolve,reject)=>{
    if(Math.random()< chancedeerro){
        reject(`Ocorreu um erro`)

    } else {
        resolve(valor)
    }
})
}

funcionarounão('Teste',0.1)
//.then(console.log) podemos chamar assim de forma simples.
.then(v=>console.log(`Valor: ${v}`))
.catch(err=>(console.log(`Erro: ${err}`)))
// tratamos o erro com catch.
// apos o cath não tem mais dado.

// podemos tratar o erro  com excessão pelo then
// .then (
//    v=> consol.log(v)    // escrevemos conlol erro so para dar erro
//    err =>console.log(`err esp:${err}`)
//  )
