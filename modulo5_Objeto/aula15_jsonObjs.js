/* Json vc Obj

json é um formato textual que é diferente da notacao Literal de OBJ*/
// o FORMA json É LIDO EM TODAS AS LINGUAGENS POIS É UM FORMATO TEXTUAL
// Muito Usado em comunicações de Sistema.
// nao pode ter fucoes dentro do JSON.
// atributos  e textos devem esta delimitados em aspas duplas.
//JSON é texto.

// Criando OBJ e transf em JSON

//obj
const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}
// TRANSFORMANDO  OBJ EM JSON.  JSON.stringify()
console.log(JSON.stringify(obj))
//json retorna um texto - ele ignora a função


//tranformando um JSON em OBJETO . JSON.parse('{}')

// JSON deve iniciar em aspas simples  e seus elementos em aspas  dupla
// atributos  e textos devem esta delimitados em aspas duplas.
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))

console.log(JSON.parse('{"b":1.5,"j":"Janela","f":{},"m":[],"h":true}'))