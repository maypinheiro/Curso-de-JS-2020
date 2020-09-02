// Revisão OBJETO

// OBJETO É UMA COLEÇÃO DINAMICA DE PARES CHAVE/VALOR
// CRIAMOS UM OBJETO COM A PARAVRA new Object 

const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica' // Podemos criar com array
produto.preco = 220

console.log(produto)
// conseguimos tbm excluir apartir do delete

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 10000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereço: {
            logadouro: 'Rua 123',
            numero: 59
        }
    },
    condutore: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome:'Ana',
        idade:48

    }],
    calcularValorSeguro: function (){
        //.....
    }

}

// podemos acessar os atributos pela notação ponto.
carro.proprietario.endereço.numero=5
//podemos acessar pelos [] - não recomendavel é muito trabalhoso
carro['proprietario']['endereço']['logadouro']= 'Av matriz'
console.log(carro)

// podemos deletar 
delete carro.condutore
console.log(carro)

delete carro.proprietario.endereço  // vai apagar o endereço
console.log(carro)
