
/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o reg */
function anuidade (mes,valor=0){
    
    switch(mes){
        case 1: {
            console.log(`Mensalidade paga na data correta, valor a ser pago:${valor.toFixed(2)}`)
            break
        }
       
        case 2: {
            juros=valor*(1+ 0.05)*2
            nv=juros+valor
            console.log(`Mensalidade paga com atraso, acrescimo de ${juros.toFixed(2)} novo valor ${nv.toFixed(2)}`)
        break
        }
        case 3: {
            juros=valor*(1+ 0.05)*3
            nv=juros+valor
            console.log(`Mensalidade paga com atraso, acrescimo de ${juros.toFixed(2)} novo valor ${nv.toFixed(2)}`)
        break
        }
        case 4: {
            juros=valor*(1+ 0.05)*4
            nv=juros+valor
            console.log(`Mensalidade paga com atraso, acrescimo de ${juros.toFixed(2)} novo valor ${nv.toFixed(2)}`)
        break
        }
        case 5: {
            juros=valor*(1+ 0.05)*5
            nv=juros+valor
            console.log(`Mensalidade paga com atraso, acrescimo de ${juros.toFixed(2)} novo valor ${nv.toFixed(2)}`)
        break
        }
        case 6: {
            juros=valor*(1+ 0.05)*6
            nv=juros+valor
            console.log(`Mensalidade paga com atraso, acrescimo de ${juros.toFixed(2)} novo valor ${nv.toFixed(2)}`)
        break
        }
        case 7: {
            juros=valor*(1+ 0.05)*7
            nv=juros+valor
            console.log(`Mensalidade paga com atraso, acrescimo de ${juros.toFixed(2)} novo valor ${nv.toFixed(2)}`)
        break
        }
        case 8: {
            juros=valor*(1+ 0.05)*8
            nv=juros+valor
            console.log(`Mensalidade paga com atraso, acrescimo de ${juros.toFixed(2)} novo valor ${nv.toFixed(2)}`)
        break
        }
        case 9: {
            juros=valor*(1+ 0.05)*9
            nv=juros+valor
            console.log(`Mensalidade paga com atraso, acrescimo de ${juros.toFixed(2)} novo valor ${nv.toFixed(2)}`)
        break
        }
       
        case 10: {
            juros=valor*(1+ 0.05)*10
            nv=juros+valor
            console.log(`Mensalidade paga com atraso, acrescimo de ${juros.toFixed(2)} novo valor ${nv.toFixed(2)}`)
        break
        }
       
        case 11: {
            juros=valor*(1+ 0.05)*11
            nv=juros+valor
            console.log(`Mensalidade paga com atraso, acrescimo de ${juros.toFixed(2)} novo valor ${nv.toFixed(2)}`)
        break
        }
       
        case 12: {
            juros=valor*(1+0.05)*12
            nv=juros+valor 
            console.log(`Mensalidade paga com atraso, acrescimo de ${juros.toFixed(2)} novo valor$R${nv.toFixed(2)}`)
        break
        }
       
    }

}
anuidade(2,30)

