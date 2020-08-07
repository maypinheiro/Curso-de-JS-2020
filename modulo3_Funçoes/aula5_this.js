/*  THIS  */
// Palavra reservada.
// Referencia o Objeto atual que esta em execução.

// this pode variar conforme a função é chamada.
// This em uma função arrow nunca vai variar.

// Função bind 

 const pessoa = {
     saudacao:'Bom dia!',

     falar(){
         console.log(this.saudacao)
     }
 }
 pessoa.falar()  // Me retorna Bom Dia !!!
///////////////////////////////////
 const falar = pessoa.falar
 falar()  // Me retorna underfinid - Poois falaar esta referenciado no this de ouro escopo.

// PARA NÃO DA ERRO CRIAMOS UMA OUTRA CONSTANTE.  
// E USAMOS .bind() para poder acessar. 

 const falarDePessoa = pessoa.falar.bind(pessoa)
 
 falarDePessoa() 
 
 /* const comunicacao = {
     comprimento: ' Heloo',

     saudar () {
         console.log(this.comprimento)
     }
 }
 comunicacao.saudar()

 const pessoas =
  [

     nome1= 'Mayara',
     nome2='Camilo',
     idade1=26,
     idade2=30
  ]
 
 console.log(pessoas[0])


 */