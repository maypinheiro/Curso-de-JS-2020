// Array 
// O array em js é um OBJETO especial. 
// é dinamico, podemos colocar diversos tipos de dados 
// por boa pratica devemos trabalhar com dados HOMOGEMIOS dentro de um ARRAY.

let aprovados= new Array('Bia','Carlos','Ana') // Não recomendavel.
console.log(aprovados)  //[ 'Bia', 'Carlos', 'Ana' ]
console.log(aprovados[0]) //Bia


aprovados=['Marcia','Julia','Patricia']
console.log(aprovados) //[ 'marcia', 'julia', 'patricia' ]
console.log(aprovados[0])//marcia

// substituindo um elemento que ja existe
aprovados[1]= 'CAMILO'
// Adicionando um elemento na ultima posiçao
console.log(aprovados)
aprovados.push('Marcos')
aprovados.push('Fernanda','Fabricio','Paloma')
console.log(aprovados)
console.log(aprovados.length)

//se adicionarmos um novo elemento em um posicao fixa que não existe
// a posicao sera valida , porem o intervalo da ultima posição existente ate ela sera UNDEFINED.

aprovados[9]='Rafael'
console.log(aprovados.length)
console.log(aprovados)
console.log(aprovados[8]===undefined) // true
console.log(aprovados[8]===null) // false


// Algumas funcoes 

// ORDENA O ARRAY. ( altera o array , ordena em ordem alfabetica / e numecia recisa de uma função)
aprovados.sort()
console.log(aprovados)


// excluindo um elemento

delete aprovados[1]   // o delete exclui o elemento , porem não reordema o array  o indice [1] agora ficara como undefined.
console.log(aprovados[1])

// splice - adiciona, exclui e adiciona e exclui ao mesmo tempo.
//.splice() //o primeiro elemento é apartir de onde quero começa, e o segundo quantos elementos quero excluir
// O terceito parametro é o que desejo adicionar
// posso adicionar sem excluir nada, so colocar 0 em quantos elementos desejoo excluir

aprovados=['luz','sol','may']

aprovados.splice(1,1)
console.log(aprovados)

aprovados.splice(1,1,'Juh','Cah')
console.log(aprovados)

aprovados.splice(1,0,'Feh','Mah')
console.log(aprovados)
