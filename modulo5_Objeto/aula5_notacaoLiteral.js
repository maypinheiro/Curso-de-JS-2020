// Notacao Literal de Objeto

const a= 1
const b=2
const c= 3

// Antes da versão 2015 tinhamos que fazer assim
const obj1={
    a:a,
    b:b,
    c:c
}
// apos 201 podemos usar a forma reduzida
const obj2={
    a,
    b,
    c
}

// ambas as formas retornam a mesma coisa .
console.log(obj1,obj2)

//  Criar um objeto dinamicamente Usando um String 
// antes 
const nomeAtributo = 'Nota'
const notaAtributo= 8.8

const obj3={}
obj3[nomeAtributo]=notaAtributo
console.log(obj3)

// nova versao
const obj4={[nomeAtributo]:notaAtributo}
console.log(obj4)

// ambos retornam a mesma coisa 


// DEFININDO FUNÇOES DENTRO DE UM OBJETO LITERAL

const obj5 ={
    funcao1: function () {
        //....
    },
     // nova forma 
     funcao2() {
         //....
         
     }   
    
}

console.log(obj5)