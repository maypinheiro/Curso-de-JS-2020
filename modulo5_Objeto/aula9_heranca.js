// Cadeia de protótipos (Prototype chain)

Object.prototype.atributo0 = '0' //// Não é recomendavel fazer, impacta todos os objetos Estamos inserindo no prototype o atributo 0

const avo = {
    atributo1: 'A',
}
const pai = {
    __proto__: avo,
    atributo2: 'B'
}
const filho = {
    __proto__: pai,
    atributo1: 'J',
    atributo3: 'C',
    atributo4: 'D'
}
console.log(filho.atributo2, filho.atributo1, filho.atributo4, filho.atributo0)

////////////////////////////////////////////////////////////////////////////////////////////////////////



const carro = {
    velAtual: 0,
    velMaxima: 200,

    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMaxima) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMaxima
        }
    },
    status() {
        return `${this.velAtual}KM/h de ${this.velMaxima}`
    }
}

const ferrari = {
    modelo: 'f40',
    velMaxima: 324 // shadowing estamos sombreando a velocidade maxima
}
const volvo = {
    modelo :'V40',
    status() {
        return `${this.modelo}: ${super.status()}`

    }

}

Object.setPrototypeOf(ferrari,carro) // Estabelece a relacao de prototypo entre os OBJETOS.
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())