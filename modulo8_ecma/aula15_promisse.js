// Promisse

function esperarPor(tempo=2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log(`Executando Promisse`)
            resolve()
        },tempo)
    })
}

/* esperarPor().then(texto=>console.log(texto)) */
// chamando varia vezes 

esperarPor()
.then(()=>esperarPor())
.then(esperarPor)
