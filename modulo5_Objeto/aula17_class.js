/*  Class

usamos a palavra extends para dizer que uma class herada a outra
*/

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // usamos a palavra super para inf oque vai herdar 
        this.profissao = profissao
    }

}
class Filho extends Pai {
    constructor() {
        super('Silva')
    }

}

const filho =new Filho
 
filho.idade=2
console.log(filho)