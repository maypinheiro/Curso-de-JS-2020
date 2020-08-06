// var em Loop

for (var i=0; i < 10; i++){
    console.log(i)
}

console.log('i=',i)
// O valor de i será 10, pois é o valor que fez com que ele saisse do laço.


/* var em loop */

const funcs = []
for (var i=0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

// Por var não ter escopo de função em todas as situações sera retornado o valor de 10 .


