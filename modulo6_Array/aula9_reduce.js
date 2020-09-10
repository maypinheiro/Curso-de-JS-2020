// Reduce

const alunos = [{
        nome: 'João',
        nota: 7,
        bolsista: false
    },
    {
        nome: 'Felipe',
        nota: 5,
        bolsista: true
    },
    {
        nome: 'Camilo',
        nota: 10,
        bolsista: false
    },
    {
        nome: 'Renato',
        nota: 2,
        bolsista: true
    },
    {
        nome: 'Gustavo Mosquito',
        nota: 10,
        bolsista: false
    }
]

// todos os alunos alunos são bolsista ?

const todosBolsista = (resultado, bolsista) => resultado && bolsista

console.log(alunos.map(i=>i.bolsista).reduce(todosBolsista))

// Algum aluno é bolsista ?
const algumBolsita =(resultado,bolsista)=> resultado || bolsista
console.log(alunos.map(i=>i.bolsista).reduce(algumBolsita))

