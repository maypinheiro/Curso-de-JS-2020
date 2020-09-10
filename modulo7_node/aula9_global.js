// Global 
//console.log(global)

// Usar o Global com cuidado.
// Não é recomendavel.
// O padrãoé usar o sistema de modulos
globalThis.MeuApp = Object.freeze ({
    saudacao(){
        return 'Teste Global'
    },
    nome: 'Nome Global'
})


