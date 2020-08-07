// This is Dentro da Função Arrow. 


/*  Arrow 

em uma função Arrow o THIS Não varia de acordo com quem esta chamando , ele valida o contexto lexico*/

function pessoa (){
    this.idade = 0
    setIntderval(() =>{
        this.idade ++
        console.log(this.idade)
    },100)
}
new pessoa

