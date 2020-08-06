// Breack e continue.

/* Evitar o uso breack e continue 

O laço Breack sai do laçõ            // Sai do laço.
o laço Continue pula e continua.   so aje em estruturas de repetição   //  Não sai do laço.
*/


const numero= [1,2,3,4,5,6,7]

for (x in numero) {
    if (x ==3){
        break
    }
    console.log(`${x} ${numero[x]}`)
}

for (y in numero) {
    if (y ==5){
        continue
    }
   console.log(`${y} = ${numero[y]}`)
}

// não usar //  
 externo: for (a in numero) {
     for (b in numero) {
         if (a == 2 && b ==3) break externo
         console.log( `Par = ${a} , ${b}`)
     }
 }