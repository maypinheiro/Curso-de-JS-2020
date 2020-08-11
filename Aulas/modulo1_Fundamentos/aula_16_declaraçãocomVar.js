/* Declaração de variaveis com VAR */

// a Var pode ser global - Visivel para todos 
// Ou no escopo de uma função- Só é visivel dentro de uma fução.



{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
} console.log(sera)   // A variavel é visivel dentro e fora do escopo.



function teste() {
    var local = 123
    console.log(local)
}
teste () 

// Quando defimos uma variavel ela só estará vizivel dentro de seu escopo
 
console.log(local)  // Neste caso retorna um erro pois estamos chamando fora da função.


var numero = 1 
{
    var numero = 2 
    console.log('dentro=', numero)
}
    console.log('Fora=', numero)

 // Vai imprimir 2 , 2 pois  o Var vai pegar o escopo global. 
 // var passa a valer 2, dentro e fora. o var não se restringe ao {}

 // Var é escopo Global. 
