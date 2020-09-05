// filter 
// percorre um array filtrando um a informação 
// retorna verdadeiro ou falso 
// se vc passar false não retorna nada , se passar verdadeiro traz tudo
// recebe o indice atual,valor atual , e o array

const produtos =[
    {nome:"Geladeira",preco:2600,fragil:true},
    {nome:"Fogão",preco:573 ,fragil:true},
    {nome:"Lavalouça",preco:2220,fragil:true},
    {nome:"Cadeira",preco:150,fragil:false},
    {nome:"Panela",preco:3564,fragil:false}
]

console.log(produtos.filter(function(p){
    return p.preco >2000
}))

console.log(produtos.filter(function(p){
    return p.fragil == false
}))


console.log(produtos.filter(function(p){
    return p.preco>2000&&p.fragil==true
}))


