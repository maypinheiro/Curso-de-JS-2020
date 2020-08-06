//Notação Ponto.

// . é a forma de acessar os compomentes.

console.log(typeof console) // console é um Objeto.

const obj1 ={}
obj1.nome ='Bola'
//obj1['nome'] = 'Bola2'
console.log (obj1.nome)

function Obj (nome){
    this.nome = nome
    this.exec = function() {
        console.log ('Teste')
    }
}
 const obj2 =new Obj ('Cadeira')
 const obj3 = new Obj ('Mesa')
 console.log (obj2.nome)
 console.log (obj3.nome)
obj3.exec()
