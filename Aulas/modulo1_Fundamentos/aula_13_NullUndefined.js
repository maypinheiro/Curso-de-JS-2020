/*  NULL & UNDERFINED */
/* Atribuição pode ser por valor - Quando Trabalhamos com tipod primitivos 
Por Referecia quando trabalhamos com OBjetos, Funçoess etc... Quem apontar para aquele dado vai sentir a mudança.
(Por referencia é indicado o caminho)  Referenica aponta para um espaço de memória*/

/* let valor //Não inicializada
console.log(valor) // undefined  Ou seja, a variavel foi inicializada, porém não existe nenhum valor definido para ela.
valor = null  // Ausência de valor,Null significa que a variavel não aponta para nenhum espaço n amemoria.  // Usar quando deseja zerar o valor de uma variavel.
console.log(valor) 
/* console.log(valor.toString())  // Vai da erro.*/ 

const produto ={}
console.log(produto) /*  Vai aparece {} */
console.log(produto.nome) 

produto.nome = 'Caneta'
console.log(produto) // vai aparecer o nome pois definimos
produto.preco =2.00
console.log(produto.preco) // vai aparecer o preço
produto.preço= null  //Quando uma variavel esta nula ou underfined vc não pode acessar nenhum valor dela.
console.log(produto)