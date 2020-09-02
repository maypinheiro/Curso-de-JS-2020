
// Usando a nocao literal
const obj1={}
console.log(obj1)

// Object  ( função construtora do JS, NEW OBJECT)
console.log(typeof Object,typeof new Object)
const objs2= new Object
console.log(objs2)

// Funçoes construtora ( onde vc mesmo cria a Função)
 // Quando coloco this no Js este atributo se torna Publico
function Produto(nome,preco,desconto){
    this.nome=nome 
    this.getPrecoComDesconto=()=> {
        return preco*(1-desconto)
    }
}

const p1= new Produto('Caneta',6,.01)
const p2= new Produto('Caderno',45,0.01)
console.log(p1.getPrecoComDesconto().toFixed(2),p2.getPrecoComDesconto().toFixed(2))

// função Factory
// Factory é um padrão de Projeto.

function criarFuncionario(nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30)*(30-faltas)
        }
    }
}

const f1 =criarFuncionario('Joao',5870,3)
const f2= criarFuncionario('Maria',7988,7)
const f5= criarFuncionario('fabio',12879,2)
const f6= criarFuncionario('marcia',1500,0)

console.log(f1.getSalario(),f2.getSalario(),f5.getSalario(),f6.getSalario())


// Object.create

const filha = Object.create(null)
filha.nome='Ana'
filha.idade=2
console.log(filha)


//Uma função famosa que retorna um Objeto ...
const fromJSON = JSON.parse ('{"info":"Eu sou um JSON"}')
console.log(fromJSON.info)