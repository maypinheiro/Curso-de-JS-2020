const porta = 2020 // criando uma porta para este servidor escultar
const express = require('express') // importando o express
const app = express() // instanciando o express - criando um objeto express com nome app (pelo q vi os devs utilizam app como padrão)
const bancoDeDados = require('./bancoDeDados') // importando as tres funções passadas como parametros no module.exports() do meu script de banco de dados.


// importando o body-parser (usado para fazer um parse das informações que veem dentro do body para um objeto)
const bodyParser =require('body-parser')

// função middleware que irá ser executada em todas as chamadas (independente do verbo ou da URL) pois ela está usando o método use. Estamos passando o bodyParser e executando o metodo urlencoded. ou seja com esse método, todas as requisições que vierem para este servidor irão cair primeiro aqui nesse middleware, e caso essa requisição tenha sido feita com o x-www-form-urlencoded ele irá transformar todo o body em um objeto. 
app.use(bodyParser.urlencoded({ extended: true}))


// listen executa todos os midlewares 
app.listen(porta, () => { //método midleware q inicia meu servidor (na vdd ele inicia por conta do main la no package.json porem esse aqui é o primeiro a ser executado)
// executa msg mostrando que foi inicializado com sucesso. ou seja a partir daqui eu ja possuo um http://localhost:2020
    console.log(`Servidor rodando na porta: ${porta}`)
})

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// essas duas funções estão atendendo a url: /produtos ambas estão atendendo no verbo GET

// função middleware que esculta no verbo GET /produtos, recebe como parametros req = requisição, res = resposta, e next. 
app.get('/produtos', (req, res, next) => {
    console.log('...Passou por aqui')
    // dentro dessa função middleware eu poderia colocar algum tipo de validação ou incremento por exemplo. Neste caso ela não está fazendo nada simplesmente executando o next() para ir para o proximo middleware.

    // passa para a proxima função que atende a url /produtos com o verbo GET
    next()
})
// tbm está atendendo a url /produtos com o verbo GET e recebe os mesmos parametros da função middleware anterior.
// esse midleware éresponsavel por retornar todos os produtos que possuirmos no array de produtos.
app.get('/produtos', (req, res, next) => {
    // utilizando o res (que serve para responder o browser) e tbm utilizando o método send (significa enviar), passamos como parametro nossa const bancoDeDados (que está recebendo a referencia do script bancoDeDados.js) e chamamos a função getProdutos(), essa função irá retornar um array de objetos, porem dentro do método send ja é realizada a converção para JSON desse array (lembrando que JSON só converte objetos, porem como sabemos array é um objeto em JS).  
    res.send(bancoDeDados.getProdutos())
})
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// esse middleware esta atendendo a URL /produtos/id tambem do método GET (ou seja quando o usuario passar algum id de produto como parametro na requisição será esse middleware o responsavel por verificar se o produto existe e se sim, retorna-lo)
// repare que dentro da url temos /:id isso quer dizer que, não será necessario digitar a palavra id, basta digitar produtos/1 que irá cair nesse middleware. 
// ele tbm recebe tres parametro req, res e next()
app.get('/produtos/:id', (req, res, next) => {
    // envia como resposta para o browser, através do método send, a resposta da função getProduto() passando como parametro o id digitado na URL no lugar da palavra id 
    // repare que para pegarmos o id que foi digitado na URL depois da palavra produtos (/produtos/1) utilizamos o parametro req.params.id onde:
    // req = tudo o que for enviado do browser virá dentro desse paraetro (ele é um objeto)
    // params = outro objeto dentro de req onde é armazenado os parametros ESCRITOS NA URL
    // id = nome do parametro que queremos buscar (esse id fomos nós que descidimos o nome, poderia ser qq outro parametro)
    res.send(bancoDeDados.getProduto(req.params.id))
})

// responde a url /produtos porem ao verbo POST, recebe os mesmos parametros (todos os middlewares recebem essa mesma assinatura)
app.post('/produtos', (req, res, next) => {

    // como ele vai adcionar um novo produto nós criamos um objeto produto, passando como parametro nome e preco que estão vindo da requisição dentro do objeto body de req. (esses parametros são passados pela requisição)
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    // após a adiçao retorna o objeto produto adcionado atraves do res.send()
    res.send(produto)
})

// altera o produto
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    // após a adiçao retorna o objeto produto adcionado atraves do res.send()
    res.send(produto)
})

// delete 
app.delete('/produtos/:id', (req, res, next) => {
    bancoDeDados.deleteProduto(req.params.id)
    res.send(`id: ${req.params.id}, deletado com sucesso`)
})