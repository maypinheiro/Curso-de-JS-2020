/* Tratamento de erro */

function tratarErro(erro) {
    // throw new Error('... Mensagem sobre o Erro ...')
   //throw 10
   //throw true
   //throw 'mensagem'
  throw { // msg associada ao erro  - Lança o erro 
      nome: erro.name,
      msg:erro.message,
      date: new Date
  }


}


function imprimirNome(objs) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // direcionamento para o erro ser tratado
        tratarErro(e)
    } finally { // Sempre é executado.
        console.log('final')
    }
}
const obj ={nome:'ana'}
imprimirNome(obj)