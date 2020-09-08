// Reduce

// É uma funçao que vai sendo ACUMULADA.
// O primeiro elemento é o acumulador e o segundo elemento é o INdice atual.

const alunos=[
    { nome:'João', nota:7, bolsista:false},
    {nome:'Felipe', nota:5,bolsista:true},
    {nome:'Camilo', nota:10,bolsista:false},
    {nome:'Renato',nota:2, bolsista:true},
    {nome:'Gustavo Mosquito', nota:10,bolsista:false}
]

const resultado= alunos.map(a=>a.nota).reduce(function(acumulador,atual){
    //console.log(acumulador,atual)
    return acumulador +atual
},0)  // Este zero referece ao valor que desejo que inicie./ se for iniciar o zero não é obrigatorio passar.

console.log(resultado)