const escola=[{
    nome: 'Turma m1',
    alunos:[{
        nome: 'Gustavo',
        nota:5
    },{
        nome:'Ana',
        nota: 10
    }]
},{
    nome: 'Turma m2',
    alunos:[{
        nome: 'Bianca',
        nota: 9
    },{
        nome:'Roberto',
        nota: 6
    }]
}]

const getNotaDoAluno =aluno => aluno.nota
const getNotasDaTurma= turma => turma.alunos.map(getNotaDoAluno)

const notas1= escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap= function(callback){
    return Array.prototype.concat.apply([],this.map(callback))

}
const notas2= escola.flatMap(getNotasDaTurma)
console.log(notas2)