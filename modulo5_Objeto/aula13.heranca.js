/* HERANÇA */
// Classe me Js é convertido para função.



function Aula (nome,id){
    this.nome=nome
    this.id=id
}

const aula1= new Aula ('BOAS VINDAS',1 )
const aula2= new Aula('NORMAS DO CURSO',2)

console.log(aula1,aula2)

// Simulando o NEW.

function novo(f,...params){
    const obj ={}
    obj.__proto__=f.prototype
    f.apply(obj,params)
    return obj

}

const aula3= novo (Aula, 'Ementa',3)
console.log(aula3)
const aula4 = novo(Aula,'Algaritmo',4)
console.log(aula4)