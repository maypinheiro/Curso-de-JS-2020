//Organização Básica de um código em JS

// O JS é organizado em sentenças de código , que podem ou não terminar em ; podem ou não ocupar mais de uma linha.
// Também se organizam em Blocos {} . E dentro de um bloco podemos abrir ou não outros blocos.
// Não podemos fazer interseção entre blocos.
// Podemos também abrir blocos vazios.

console.log(`Olá Mundo!`) //Sentença de Código.


{
    console.log(`Olá Mundo!`) //Bloco de Código.
}

{
    //sentença vazia
}

{
    {
        console.log(`Olá mundo!`) // Sentença de código dentro de outra sentença.
    }
}