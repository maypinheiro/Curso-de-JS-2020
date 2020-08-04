// Operadores Relacionais 

// O resultado sempre é True ou False .

 /* 
 = Atribuição
 == Igual 
 === Igualdade Restrita.
  */

  console.log('teste 1', '1'  == 1) // true
  console.log('teste 2', '1' === 1) //false
  console.log('teste 3', '1'   !=1) //false
  console.log('teste 4','1'  !== 1) // true

  console.log('teste 5',  1<2) // true
  console.log('teste 6',  1>2) //false
  console.log('teste 7', 1<=2) // true
  console.log('teste 8', 1>=2) //false


  const d1 = new Date(0) // 0 Representa a Data de Referencia do JS que é 01/01/1970 
  const d2 = new Date(0)
  console.log(d1==d2)    //False
  console.log(d1===d2)   //False
  console.log (d1.getTime ===d2) //false
  console.log (d1.getTime ===d2.getTime) //true
  console.log(undefined==null) //true
  console.log (undefined===null) //false
  