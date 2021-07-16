

// challenge 1, numeracion de par

for(n = 0; n<=100; n= n+1 ){
 if (n% 2 === 0) {
    console.log( n + ' es par')
}else{
    console.log( n + ' es inpar')
}
}

// challenge 2, numeros divisible dentro 3-5 van decir fizbuzz,
// los que son unicamente dentro 3 van a decit fizz y los que
// son unicamente divisible dentro 5 van a decir buzz

// UTILIZANOD LOS CICLOS FOR DEBEMOS DE PASA DENTRO LOS NUMEROS Y DECLARAR LAS VARIABLES
// LOS RESUIDOS SE DEBEN DE UTILIZA % PARA SABER CUALES SON COMPATIBLES.//


for (let p =1; p<=100; p++){
//el R// de 3 es =0 & R// de 5 =0
  if (p%3 === 0 && p %5 ===0){
// resultado vav dar fizbuzz
    console.log(p + 'fizbuzz')
  }else if ( p%3 ===0 ){
    console.log(p + 'fiz')
  }else if ( p%5 ===0){
    console.log(p + 'buzz')
  }else {
    console.log(p)
  }
}