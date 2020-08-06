/* switch
Estrutura Oficial para Mutiplas Seleções. 
Só aceita número Inteiro.
sempre temos que passar um parametro para o Switch. 
usamos 
switch 
case n: 
break


 */ 

/* const local =  function estado (sigla) {
    switch(sigla){

        case 'rj':
            console.log ( 'Você Mora no Rj')
        break
        case 'sp':
            console.log('Você Mora em São Paulo')
        break

        default:
           console.log ('VocÊ não mora no Rj e nem em Sp') 
    }
}
 
local('rj') */

/* const familia = function descendente (sobrenome){
    switch(sobrenome){
        case 'Pinheiro':
            console.log ('A família Pinheiro, nobre descende da gens (família) romana Pinária (Pinarii), esta era uma família muito antiga de aristocratas romanos, que existia desde o século IX a.C.')
        break
        case 'Sousa':
            console.log ('Souza é uma variação do nome Sousa, que tem origem do latim saza ou saxa, e que significa "seixo" ou "pedra".')
        break
        case 'Andrade':
            console.log('Na origem dos Andrades, a variante Andrada também é considerada, mesmo que seja menos usual no Brasil. A base desse sobrenome vem de uma antiga família originária da Galícia, na Espanha')
            break
        case 'Silva':
            console.log ('É o sobrenome mais comum no Brasil e em Portugal, onde teve origem. A variação “da Silva” ocupa a 22ª colocação, com pouco mais de 1 milhão no Brasil')
            break
    
            default:
                console.log( ' Seu Sobre Nome não se encontra em nossa base de dados')
        }

}
familia('Silva') */

const resutadofinal = function nota(n) {
 switch (Math.floor(n)) {     // O metodo Math.floor foi usado para arredondar o numero - pois SWITCH não aceita numero quebrado. neste cado vai ignora o numero apos o . 
     case 10: 
     case 9:
         console.log ('Aprovado com merito')
    break
    case 8: case 7: 
        console.log('Aprovado')
    break
        case 6: case 5:
            console.log('RECUPERAÇÃO')
    break
    case 4: case 3: case 2: case 1:
        console.log('Recuperação')
    break
    default:
    console.log('Nota Invalida')
        
 }
}

resutadofinal(4.9)