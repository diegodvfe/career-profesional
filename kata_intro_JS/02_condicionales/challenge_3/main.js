 

//  challenge contra la pc


let  userAnswer = prompt('Ingrese piedra, papel o tijera')

// Pc Answwer
let pcAnswer = ''

// Math --> metodo de js que me permite usar funciones matematicas

// .floor -> regresa un numero entero
// .random -> devuelve un numero random 0 -1
// para ellor tengo que multiplicarlo por 3 --> 0,1,2
// para poder hacer mis condiciones le sumare 1 a el resultado

let options = Math.floor( Math.random() * 3 +1 )
console.log(options);

if ( options ===1 ) { pcAnswer = 'piedra'}
if ( options ===2 ) { pcAnswer = 'tijera'}
if ( options ===3 ) { pcAnswer = 'papel'}
console.log(options)

if ( userAnswer === pcAnswer){
  console.warn('Es un empate jaja :)' + userAnswer + ' y la computadora' + pcAnswer)
} else if (userAnswer === 'papel' && pcAnswer === 'piedra' || userAnswer === 'tijera' && pcAnswer === 'papel' || userAnswer === 'piedra' && pcAnswer === 'tijera') {
  console.log('Ganaste porque elegiste: ' + userAnswer + ' y la computaora eligio: ' + pcAnswer)
} else if (pcAnswer === 'papel' && userAnswer === 'piedra' || pcAnswer === 'tijera' && userAnswer === 'papel' || pcAnswer === 'piedra' && userAnswer === 'tijera') {
  console.log('Gano la computador porque elegio: ' + pcAnswer + ' y tu elegiste: ' + userAnswer)
} else {
  console.error('No es una opcion valida, hzlo de nuevo perro!');
}