// Imperativo x Declarativo

const alunos =[
    { nome:'João',
    nota: 7.9 
     },
    { nome:'Maria',
    nota: 7.9 
     },
    { nome:'José',
    nota: 7.9 
     }

]
// imperativo

let total1=0
for( let i=0;i< alunos.length; i++){
    total1+=alunos[i].nota

}
console.log(total1/alunos.length)

// Declarativo .

const notas= aluno=> aluno.nota
const soma=(total,atual)=> total+atual


const total2= alunos.map(notas).reduce(soma)
console.log(total2 /alunos.length)


/*  fiz para colocar tofixed()

const res3=total2/alunos.length
console.log(res3.toFixed(2)) */
