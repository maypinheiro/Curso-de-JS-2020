//
function gerarNumerosEntre(min,max,tempo){
    if(min>max)
         [max,min]=[min,max]
    return new Promise(resolve=>{
        setTimeout(function(){

            const fator=max-min+1
            const aleatorio= (Math.random()*fator ) + min
            resolve(aleatorio.toFixed(0))
        },tempo)

    })
}

function gerarVariosNumeros(){
    return Promise.all([
       gerarNumerosEntre(1,100,4000),
        gerarNumerosEntre(1,60,5000),
        gerarNumerosEntre(1,6,3000),
         gerarNumerosEntre(1,20,2500)
    ])
}

gerarVariosNumeros()
.then(numeros=> console.log(numeros))