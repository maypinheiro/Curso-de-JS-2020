//map

    const carrinho = [
        '{"nome":"Borracha","preço":1.50}',
        '{"nome":"Caderno","preço":22.76}',
        '{"nome":"Kit de lápis","preço":7.80}',
        '{"nome":"Caneta","preço":7.50}']

        // Retornar um ARRAY apenas com os PREÇOS.
    
    const paraObjeto=json=>JSON.parse(json)  // transformando o json em array.
    const apenaspreco=produto=>produto.preço
    const resultado =carrinho.map(paraObjeto).map(apenaspreco)
    console.log(resultado)
    const nomes1=nomes=>nomes.nome
    const res= carrinho.map(paraObjeto).map(nomes1)
console.log(res)