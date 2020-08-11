/* Objetos 
    Criação de Objetos de forma Literal 

{} Um par de chaves representa um OBJETO
Um objeto é uma coleção de {} e valor: 

    [] um par de conchetes representa um ARRAY.

Em JS podemos definir como este objeto é dinamicamente. */

const prod1 = {} // Objeto Literal Vazio.
prod1.nome = 'celular ultra mega' 
prod1.preço = 4.989,99
console.log(prod1)
console.log(prod1.preço) //Podemos tbm chamar com o identificador.

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.80,
    obj: {
        bla:1,
        obj:{
            bla:2
        }
    } 
}
// Podemos criar um objeto dentro de ooutro objeto.
console.log(prod2)



//  objeto
const a= {
    nome: 'mayara',
    idade:28,
    sexo:'f'
}
 console.log(a)