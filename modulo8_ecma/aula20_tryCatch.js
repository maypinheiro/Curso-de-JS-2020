function funcionarounão (valor,chancedeerro){
   
    return new Promise((resolve,reject)=>{
       
      try{
          conso.log(`temp`)
        if(Math.random()< chancedeerro){
            reject(`Ocorreu um erro`)
    
        } else {
            resolve(valor)
        }
      }catch(e){
          reject(e)
      }
    })
    }
    
    funcionarounão('Teste',0.1)
     .then(v=>console.log(`Valor: ${v}`))
     .then(
         v=>consol.log(v),
        // err=>console.log(`Erro esp digitacao:${err}`)
     )
    .then(()=>console.log(`quase fim`))
    .catch(err=>(console.log(`Erro todos: ${err}`)))
    .then(()=>console.log(`Fim`))