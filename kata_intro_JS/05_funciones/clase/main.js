
// ------> Estructura de una funcion
//   funcion sin parametros
// funtion nombre () {
//   instructiones de mi funcion
// }

// // --> funcion con parametros
//   function nombre(x,y){
//     // los parametros hacen que mi funcion se ejecute
//      correctament
//       instruciones de la funcion
//   }

let nombreG = 'Ricardo'

function saludo(nombre){
  // scope en la funcion
  console.log('Hola,' + nombre + 'como estas?');
}

saludo('Raul')
saludo('diego')
saludo('valentina')
saludo()

// console.log(nombreG)

function multiplicacion( x, y, z) {
  console.log(x * y * z);
}

multiplicacion(39,59,38)


function suma(x=0, y=0, z=0){
  if (x !== undefined && y !== undefined){
      console.log(x + y);
  }
  else if (z !== undefined && y !== undefined ){
    console.log(y + z);
  }
}

suma(30, 59,)
suma( 0, 46, 58)

// ------------>Objectos literales <------------

var persona = {
  nombre: 'diego',
  edad: 19
}

var musica = new Object()
  musica.genero = 'trap'
  musica.artista = 'duki'

console.log(persona);
console.log(musica);
