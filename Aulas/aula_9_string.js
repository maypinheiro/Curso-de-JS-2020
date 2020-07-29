// String

 /*  string é uma cadeia de caracteres, pode ser delimitado em:
    ´aspasSimples´   "AspasDupla " `Crase`
    
    .charAT()  vai me dar a letra que esta na posição ()
*/

const escola = "Cod3r"
console.log(escola.charAt(3))
console.log(escola.charAt(7)) //Quando for um valor onde não tem , retorma vazio.
console.log(escola.charCodeAt(1))
console.log(escola.indexOf("3")) //  mostra se possui aquele item e qual pé a sua posição
console.log(escola.indexOf(10)) //quando o item não existe ele me retorna  -1
console.log(escola.substring(1)) //vai me retornar apartir do indice 1
console.log(escola.substring(0,3)) // vai do indice x até o y sem incluir o y)
console.log( 'Escola '.concat(escola).concat("!"))  // podemos concatenar assim
console.log (escola.replace(3,'e'))  // Substitui o primeiro elemento pelo segundo
console.log (escola.replace('r','e')) 
console.log(escola.replace(/\w/g,'m')) // regex - susbstitui todos os itens pelo 2elemento
console.log('Ana,Maya,May'.split(',')) //cria um array