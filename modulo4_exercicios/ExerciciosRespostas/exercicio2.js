//Equilátero: Os três lados são iguais.  n && n && n
//Isósceles: Dois lados iguais n || n =n
// Escaleno: Todos os lados são diferentes !=

function compararTriangulo (l1,l2,l3) {
   if (l1 && l2===l3){
        console.log(`Equilátero: Os três lados são iguais`)
    }
    else if (l1 != l2) {
        console.log(` Escaleno: Todos os lados são diferentes`)
    }
    else if (l1 || l2 ===l3){
        console.log (`Isósceles: Dois lados iguais `)
    }
   
}
compararTriangulo()