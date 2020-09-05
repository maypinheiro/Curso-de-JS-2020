// GETTERS e  SETTERS

/* Uma das Tecnicas de ENCAPSULAMENTO é colocar seus atributos Privados e ter metodos que alteram e ler estes atributos de forma controlada 
 JS NÃO aceita sobrecarga de método 
  em js o metodo não fica privado, existe uma conversao onde foi determinado q _ sinaliza que é privado
  */

 const sequencia ={
     _valor:1,    // conversão
     get valor(){
         return this._valor++
     },
     set valor(valor){
         if(valor>this._valor){
             this._valor=valor
         }

     }

 }

 console.log(sequencia.valor) // Me retorna 1 
 console.log(sequencia.valor,sequencia.valor) // 2,3
 console.log(sequencia.valor,sequencia.valor) //4,5
 sequencia.valor=900
 console.log(sequencia.valor,sequencia.valor) // 900, 901
 sequencia.valor=-9
 console.log(sequencia.valor,sequencia.valor)  // 902,903 - ele ignora o numero que eu coloquei pois so esta validando apartir de 1 , ele continua a sequencia anterior
