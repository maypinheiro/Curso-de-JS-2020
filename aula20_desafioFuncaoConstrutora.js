// Função Construtora.

function Pessoa(nome) {
    this.nome = nome

    this.falar= function () {

        console.log(`Meu Nome é ${this.nome}`)

    }
}

const p1 = new Pessoa('Mayara')
p1.falar()