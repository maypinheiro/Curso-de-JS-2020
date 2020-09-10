// formulas de acessar modulos  dentro de sua aplicação.
/* const moduloA = require('../../aula2_sistemaDeModulos')  // acessando pelo caminho relativo
console.log(moduloA)   
 */

/* const moduloB = require('C:\Users\mayar\OneDrive\Documentos\GitHub\Curso-de-JS-2020\modulo7_node\aula2b_exportacao.js')
console.log(moduloB) // acessando pelo  caminho absoluto. */

/* const http= require('http')
http.createServer((req,res)=>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)
 */

 const c= require('./pastac/index')   // quando vamos acessar na mesma pasta colocamos ./ ( so um ponto)
 console.log(c)
 console.log(c.ola2.ola)