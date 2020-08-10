// Funçoes construtoras.

function carro (velocidadeMaxima = 200, delta = 5) {
    // Atributo Privado 
    let velocidadeAtual = 0

    // Metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }

    }
    // metodo Publico
     this.getVelocidadeAtual = function () {
         return velocidadeAtual
     }


}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const gol =new carro (200,20)
gol.acelerar()
console.log(gol.getVelocidadeAtual())
gol.acelerar()
gol.acelerar()
gol.acelerar()
gol.acelerar()
console.log(gol.getVelocidadeAtual())

const ferraari =new carro (200,100)
ferraari.acelerar()
ferraari.acelerar()
ferraari.acelerar()
console.log(ferraari.getVelocidadeAtual())
    