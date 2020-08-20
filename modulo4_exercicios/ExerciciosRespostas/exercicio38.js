/* ) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor */

function impar(inicio = 0, fim = 100) {
    if (inicio > -1 && inicio < 101){
        
        if(fim>inicio&&fim<101){
            for (i=inicio;i<=fim;i++){
                if(i%3==0){
                    console.log(i)
                }
                
            }
         
        }
        else {
            console.log(`Valor Final Invalido. O valor final deve ser maior que o valor inicial e esta no intervalo  de 1 a 100`)
        }
    }
    else {
        console.log( `Valor Inicial invalido, Somente valores de 1 a 100 `)
    }

}

impar(3,10)