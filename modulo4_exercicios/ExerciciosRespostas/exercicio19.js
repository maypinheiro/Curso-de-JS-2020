

/* Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
 */
function compras(codigo, quantidade=1) {
    let cachorroquente = 3.00
    let hamburger = 4.00
    let cheeseburger = 5.50
    let bauru = 7.50
    let refri = 3.50
    let suco = 2.80
    let total=0

    switch (codigo) {
        case 100: {
            total=cachorroquente*quantidade
            console.log(`Quantidade: ${quantidade} | Produto: CachorroQuente | Valor unidade  R$: ${cachorroquente.toFixed(2)} | Total: R$${total.toFixed(2)}`)
            break
        }
        case 200: {
            total=hamburger*quantidade
            console.log(`Quantidade:${quantidade} | Produto: Hamburger | valor unidade R$:${hamburger.toFixed(2)} | Total: R$${total.toFixed(2)}`)
            break
        }
        case 300: {
            total=cheeseburger*quantidade
            console.log(`Quantidade:${quantidade} | Produto: Cheeseburger | valor unidade R$:${cheeseburger.toFixed(2)} | Total: R$${total.toFixed(2)}`)
            break
        }
        case 400:  {
            total=bauru*quantidade
            console.log(`Quantidade:${quantidade} | Produto: Bauru | valor unidade R$:${bauru.toFixed(2)} | Total: R$${total.toFixed(2)}`)
            break
        }
        case 500: {
            total=refri*quantidade
            console.log(`Quantidade:${quantidade} | Produto: Refrigerante | valor unidade R$:${bauru.toFixed(2)} | Total: R$${total.toFixed(2)}`)
            break
        }
        case 500: {
            total=suco*quantidade
            console.log(`Quantidade:${quantidade} | Produto: Suco | valor unidade R$:${suco.toFixed(2)} | Total: R$${total.toFixed(2)}`)
            break
        }
        default: {
            console.log (`Não trabalhamos com este Produto`)
        }
    }
}
compras(700,17)