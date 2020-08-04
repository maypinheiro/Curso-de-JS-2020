/* Contexto Browser x Node */

/* Constantes e variaveis declaradas com let , não vão para o escopo global. */

let a =3 
console.log(this.a)
console.log(global.a)

abc =3 
console.log(abc)  // Quando não declaramos var ou let - estamos criando uma variavel diretamente no global - não fazer isto.

