// Escrevendo Arquivos
const fs = require('fs')  
const produto ={
    nome:'Celular',
    preco: 1234.55,
    desconto:0.15
}

fs.writeFile(__dirname + '/aula18_arquivoGerado.json',JSON.stringify(produto), err =>{
    console.log(err|| 'Arquivo Salvo')
})