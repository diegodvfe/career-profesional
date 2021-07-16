
let arreglo = [12, 10, 5, 'hola', 10, 'Ricardo', true]
console.log(arreglo);

//               0         1        2          3
let fruta = [ 'manzana', 'fresa', 'sandia', 'platano']
console.log(fruta[2])
fruta[4] = 'guayaba'


// -----Metodos------
// .pusl() -> agrega un elemento al final de mi objeto

fruta.push('pera')
fruta.push('mangos')
fruta.push('melon')
console.log(fruta)

// .pop ---> elimar el ultimo elemento
fruta.pop()


//

let animales = [
  ['perro', 'gato'],      // 0
  ['cocodrilo', 'giraja', ''] //1
]

console.log(animales[1] [0])
console.log(animales[0] [0])


//  -----> objetos o objects <-----

let persona = {
  nombre: 'diego',
  edad: 23,
  cel: '+556 5839320',
  musica :{
      regeton: ['bb', 'planb', 'nj'],
      trap: {
        usa: ['aleman', 'santa klan'],
        mexicano: ['drake', 'lil'],
        argentino: ['gato', 'pedo']
      },
  },
  peliculas : ['der', 'fr', ' gd']
}

console.log(persona.musica.trap.argentino[1])
