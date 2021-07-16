// alert('descarga ya!!!')

// operadores logicos

// -----------> Estructura<--------------

// if (condicion) {
//   el codigo a ejecutar se el resultado de
//   mi condicion es verdadero (true)
// } else {
//   el codigo a ejecutar si el resultado
//   de mi condicion es falso (false)
// }

// --------------> Operadores relacionales <----------

// < ---->menor que
// <= --->menor igual
// > ----> mayor que
// >= ---> mayor igual
// ==  ---> comparar
// === ---> comparar identicamente
// !==  --> diferente de

// let numero = 10;

// if (numero === '10' ){
//   console.log('Es verdader')
// } else {
//   console.log('es falso')
// }

//  Modulo -> % -> es el resuido de la division

// CHALLENGE 1

// let numero = parseInt(prompt('Ingrese su numero', 0));
// let valueNumber = Number(numero);


if (valueNumber %2 === 0 ) {
  console.log( 'El numero: ' + valueNumber + ' es par ');
} else if (numero %2 === 1 ) {
  console.log('El numero: ' + valueNumber + ' es impar');
} else {
  console.error('No es numero: ingresa un numero')
}

//  ----------<Operadores logicos>------------

//  && ---> and
//  || ---> or

// si puedes conducir

// es un menor de edad -> no puede conducir
// si 16 y 17 -> permiso para conducir
// si eres mayorr de 18 puedes conducir
// si si eres mayor de 90 --> ya no puedes conducir


// let askAge = prompt('Cual es tu edad?');
// let valueName = Number(askAge);



// if (valueName >= 18 && valueName <= 90){
//   console.log('Puedes conducir');
// } else if (valueName ===16 || valueName === 17) {
//   console.log('puedes sacar tu permiso para conducir')
// } else if (valueName <=16 || valueName >= 90 ) {
//   console.warn('No puedes conducir :/');
// } else {
//   console.error('No es una edad valida, intentalo de nuevo');
// }


// ------Challenge 2 -------

// juego de piedra papel o tijera
// preguntar  a 2 usuarios que opcion  eleguir
// mostrar en consola que jugador gano y porque


let user1 = prompt("Elige sus armas: piedra, papel o tijera");
let user2 = prompt('Elige sus armas: piedra papel o tijera');

if (user1 === 'piedra' && user2 === 'tijera'){
  console.log('Gano el user1');
} else if (user1 === 'tijera' && user2 === ' papel'){
  console.log('gano el user1');
} else if (user1 === 'papel' && user2 === 'piedra'){
  console.log('gano el user1' );
} else if (user1 === 'papel' && user2 === 'papel') {
  console.log('empate');
} else if (user1 === 'tijera' && user2 === 'tijera') {
  console.log('empate');
} else if (user1 === 'piedra' && user2 === 'piedra') {
  console.log('empate');
} else if (user1 === 'piedra' && user2 === 'papel') {
  console.log('gano el user2');
} else if (user1 === 'papel' && user2 === 'tijera') {
  console.log('gano el user2');
} else if (user1 === 'piedra' && user2 === 'tijera') {
  console.log('gano el user2');
}


// challenge numero 3

