//promisse é uma promessa 

 
// associado a um promesa você tem o valor de alguma coisa.
// para gerar o dado deve-se  passar uma função como parametro para a promisse
// passo como parametro para a promisse uma função , e esta funcao recebe como parametro
// uma funcao que vai a função que eu vou chamar quando for cumprir a promessa
// 
let p= new Promise(function(resolve){
    resolve(3)
})
// so pode ser passado um unico valor para a promessa. 
// para chamar a promessa
 
p.then(valor=>console.log(valor))
// vocÊ consegue chamar o then varias vezes
// O resutado do primeiro é passado para o proximo
