// OBJETO - Par Nome/Valor 

// Um Objeto é uma coleção de chave e valor

const saudacao ='Olá'  // Contextp LEXICO - Local fisico onde sua variavel foi declarada.

function exec() { 
    const saudacao = 'Falaa' // contexto lexico 2
    return saudacao

}

// Objetos são grupos aninhados de pares/nome/ identificador e valor.
 const cliente = {
     nome:'Mayara',
     idade: 25,
     endereço:{
         Rua:'Joaquim Gomes',
         numero: 35,
         bairro: 'Jardim Mutinga'
     }
 }

 console.log(saudacao)
 console.log(exec())
 console.log(cliente)

 // Podemos dar o nome para a mesma variavel , desde que estejam em conxtextos lexos diferentes.