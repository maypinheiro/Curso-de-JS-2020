// Map

const tec= new Map()

tec.set('react',{framework:false})  
tec.set('angular',{framework:true})
console.log(tec) // retorna  Map {
   // 'react' => { framework: false },
   // 'angular' => { framework: true }
  // }
console.log(tec.get('react')) //{ framework: false }
console.log(tec.react)// retorna undefined
console.log(tec.get('react').framework) //false

const chavesVariadas= new Map ([
   [ function(){},'funcao'],
   [{},'Objeto'],
   [123,'numero']
])

chavesVariadas.forEach((vl,ch )=>{
console.log(ch,vl)
})

console.log(chavesVariadas.has(123)) // usamos has para saber se o valor esta presente
chavesVariadas.delete(123)
console.log(chavesVariadas.size) // inform quantos elementos tem dentro 

// E uma estrutura chave valor que não aceita repetição na chave
// a chave aceita: Função, objs,array, numeros, string, boolen
//porem não pode haver repetição na chave.
// O valor pode ser petetido.