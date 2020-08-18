/* Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */






function calc(n1=0,sinal,n2=0) {
    /* let n1 = 3
    let n2 = 8  */
    let resutado = 0


    switch (sinal) {


        case '+': {
            resutado = n1 + n2
            console.log(resutado)
            break
        }
        case '-': {
            resutado = n1 - n2
            console.log(resutado)
            break
        }
        case '*': {
            resutado = n1 * n2
            console.log(resutado)
            break
        }
        case '/': {
            resutado = n1 / n2
            console.log(resutado)
            break
        }
        default: {
            console.log(`Valor invalido`)
        }


    }


}

calc(3,'*',3)
