
// ---> ESTRUCTURA
// for (Incio: limite; secuencia){
//   bloque de codigo que se ejecuta
//   hasta que el ciclo acabe
// }

// console.log(1)
// console.log(2)
// console.log(3)
// ...
// console.log(10)

// let name = {
//       nombre: diego,
//     edad:36
//   }

// for (i = 1; i<= 11; i++){
//   console.log(i);
// }

// // Ejercicio 1
// for (n = 100; n>=0; n = n - 1 ){
//   console.log(n)
// }

// // Ejercicio 2
// for (t = 0; t<=500; t = t +50){
//   console.log(t);
// }

// for (d=100; d>= -100; d = d - 10){
//   console.log(d)
// }


let personas = [
  {
    nombre:'diego',
    xd:'df'
  },
  {
    nombre: 'samara',
    xd:'df'
  },
  {
    nombre: 'emilio',
    xd: 'df'
  },
  {
    nombre: 'valentina',
    xd: 'df'
  },
  {
    nombre: 'ricardo',
    xd: 'f'
  },
]

for (let y = 0; y < personas.length; y++){
  console.log(personas[y].xd)
}