/* // Let em Loop

for (let i = 0;i < 10; i++){
    console.log(i)
}
//console.log('i=',i) // Não ira aparecer fora do Bloco pois Let so ira rodar dentro do bloco. */


const funcs = []
for (let i=0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[0]()
funcs[2]()
funcs[8]()

// Ira imprimir 2 e 8 pois Let respeita o escopo da função.