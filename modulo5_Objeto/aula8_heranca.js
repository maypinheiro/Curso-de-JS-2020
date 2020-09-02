/*  HERANÇA EM java Script 

Principio do OO, no qual vc reaproveita codigo! VocÊ herda do seu paisatributos*/
// Se tiver que escolher entre HERAÇA e COMPOSIÇÃO priorize a composição.
/*
sua Herança é baseada em PROTOTIPOS
ELE procura no seu escopo caso não tenha ele vai verificar no seu pai- avo ...
caso não encontre retorna UNDERFANITY
todo Obj tem um propotype interno  o Object.propotype é o ultimo não tem ninguem apos ele
acessamos o prototype com __proto__ 
prototype so esta presente dentro de funcoes, para obj usamos __proto__ */

const ferrari={
    modelo:'f40',
    velMax:324
}

const  volvo ={
    modelo:'v40',
    velMax: 200
}
console.log(ferrari.prototype) //undefined - pois objs não tem propotype acessamos com proto
console.log(ferrari.__proto__) //{}
console.log(ferrari.__proto__===Object.prototype)//true
console.log(volvo.__proto__)//{}
console.log(volvo.__proto__===Object.prototype)//true
console.log(Object.prototype.__proto__) // null
console.log(Object.prototype.__proto__===null) //true

function MeuObjeto(){
    
}
console.log(typeof Object,typeof MeuObjeto) // function
console.log(Object.prototype,MeuObjeto.prototype)