/* Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. 
Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação:
 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12. 
Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais.
 Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
 */

/*  
const delta=function (a,b,c){
     if ((b*b)-4*a*c < 0) {
         console.log (`Delta Negativo`)
    } else {
         console.log((- b + Math.sqrt(delta)) / (2*a) )
         console.log ((- b -Math.sqrt(delta))/2*a)
         
    }
}

delta(1,10,12)



const calc => */




 
// Funçã para calcular  Baskara

function calc (a,b,c){    // criamos a funcao e passamos os parametros. 
    let delta = b*b-4*a*c  // criamos uma variavel com a formula de delta
    let resultado =[]  // Criamos uma variavel do tipo ARRAY  para armazenar os valors de x1 , e x2 

    if (delta<0){       // demos a primeira condição .Não existe delta Negativo.
        return 'Delta Negativo'
    } else{                  // não sendo delta negativo podemos executar a ação.
        let x1=  -b + Math.sqrt(delta) / 2*a  // criamos um variavel para obter o valor de x1
        let x2=  -b - Math.sqrt(delta) / 2*a   // criamos uma variavel para obter o valor de x2
        resultado.push(x1,x2)                // achamos x1 e x2, agora ele deve ser armazenado em resultado que é um array que suporta mais de um valor, para isto chamamos o resultado atravez de .push e passamos as variaveis que queremos .push(x1,x2) agora x1 e x2 estão juntas armazwnadas dentro de um array.
        console.log(resultado)   // Agora que temos o valor de x1 e x2 temos que retormar
        // podemos tbm escrever  retur resultado.
    }
}


console.log(calc(2,18,-48))
 

/* 


     let calc1 =function delta (a,b,c) {
     let valor =b*b-4*a*c
     let res =[]
     if (valor<0){

         console.log(`Delta é negativo`)

     } else {
        let x1= -b + Math.sqrt(valor) / 2*a
       let  x2= -b - Math.sqrt(valor) / 2*a
         res.push(x1,x2)
         return res
     }
    }
 console.log (calc1(2,18,-48))
     */