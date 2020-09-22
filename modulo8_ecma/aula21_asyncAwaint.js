 

/* function esperarPor(tempo=2000){
    return new Promise(function(resolve){
        setTimeout(()=> resolve(),tempo)
    })
} */

/* esperarPor(2000)
.then(()=>console.log(`Executando 1`))
.then(esperarPor)
.then(()=>console.log(`Executando 2`))
.then(esperarPor)
.then(()=>console.log(`Executando 3`)) */

// async Awaint//  Ter um código que parece sincrono, mas que na verdade n]ao é sincrono.
// vocÊ tem a capacidade de esperar que uma função seja resolvida. sem usar o metodo then

function esperarPor(tempo=2000){
    return new Promise(function(resolve){
        setTimeout(()=> resolve(),tempo)
    })
}

function retornarValor(){
    return new Promise(resolve=>{
        setTimeout(()=> resolve(10),3000)
    })
}
async function executar(){
   let valor=await retornarValor()

 await esperarPor(1500)
 console.log(`esperando valor ${valor}...`)

 await esperarPor(1500)
 console.log(`esperando valor ${valor +1} `)

 await esperarPor(1500)
 console.log(`esperando valor ${valor+2} `)

 return valor +3
}
async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}
executarDeVerdade()

