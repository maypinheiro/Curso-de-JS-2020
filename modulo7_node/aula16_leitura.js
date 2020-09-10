const fs = require('fs')
const {
    error
} = require('console')
const caminho = __dirname + '/aula15_lendoArquivos.json'

//sincrono ...
// vai ler todo aquivo para depois retornar . Arquivos grnades calsam impacto no retorno


const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono 


fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.porta}`)
})

// ler um arquivo JSON MAIS FACIL
// __dirname é uma pasta que esta presente em todos os modulos do NODE que representa o diretorio atual

const config = require('./aula15_lendoArquivos.json')
console.log(config.db)
// ja traz o arquivo convertido em OBJETO



// LENDO UM DIRETORIO. 
fs.readdir(__dirname,(err,arquivos)=>{
    console.log('Conteúdo da Pasta ...')
    console.log(arquivos)
})
