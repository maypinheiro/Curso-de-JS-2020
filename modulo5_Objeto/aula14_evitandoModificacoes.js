/* Evitando modificações */

/* Object.preventExtensions
 * Previne que o Objeto seja estendido não permite que almente o NúMERO DE ATRIBUTOS, você pode excluir Objetos,alterar o nome,  mais não permite Adicionar Novos.
 */

const produto =Object.preventExtensions ({
    nome: 'Qualquer',
    preco:3.99,
    id:978
})

console.log(Object.isExtensible(produto)) // false - serve para verificar se um Obj É EXTENSIVO.

produto.nome='Borracha'   // vai alterar o nome para borracha
produto.descricao=' Borracha escola ' // não acrescenta a descricao pois não foi definida na função construtora, e esta bloqueada a extensao
delete produto.id // vai excluir o Id

console.log(produto)  // retorna  { nome: 'Borracha', preco: 3.99 }


// Object.seal
// VocÊ consegue alterar os valores dos atributos, porem não consegue adicionar nem remover atributos

const pessoa= {
    nome: 'Juliana',
    idade: 34
}
Object.seal(pessoa)

console.log(Object.isSealed(pessoa)) // verifica se o Objeto esta selado. true
 
pessoa.sobreNome='Silva'  // Não adiciona pois não tem sobreNome na funcao construtora
delete pessoa.nome   // nao deleta o nome
pessoa.idade=30     // altera a idade para 30

console.log(pessoa)  // retorna { nome: 'Juliana', idade: 30 }


//Object.freeze = selado+valores Constantes.
// não é possivel altera valores, incluir valores
// nao deleta Valores - a unica diferenca para o SEAL é que os valores sao fixos.

const aluno={
    nome:'Mayara',
    disciplina:'JS',
    periodo:1,

}
Object.freeze(aluno)

aluno.nome='Camilo' // nao altera
aluno.disciplina='C#'// nao altera
aluno.idade=30 // nao inclui
delete aluno.periodo // nao deleta

console.log(aluno) // retorna { nome: 'Mayara', disciplina: 'JS', periodo: 1 }

