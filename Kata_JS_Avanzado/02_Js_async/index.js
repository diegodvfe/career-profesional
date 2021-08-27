
// ----- Ejercicios ---------------
const saludo = (imprimir, mensaje) =>{
    imprimir(mensaje)
};

// primero parametro es una funcion -> callback
saludo((mensaje) =>{
  console.log(mensaje)
}, 'Hola desde un callback'); //el segundo parametro es el mensaje

// -----2

const imprimirOperacion =(operacion, x, y) =>{
    operacion(x, y)
}
//suma
imprimirOperacion((x,y)=> {
  console.log(x + y)
}, 10)
// porcentajes
imprimirOperacion((x,y) => {
  console.log(x % y)
}, 50, 90);


const carateres = (convertir, mayuscula, caso) =>{
    convertir(mayuscula,caso)
}

carateres((mayuscula, caso)=>{
  if(mayuscula === 'minus'){
    console.log(mayuscula.toLowerCase)
  } else if (caso === 'mayus'){
    console.log(mayuscula.toUpperCase)
  }
}, 'Diego', 'minus');

// -------5

const tiempo = (conver,tiempos ) => {
 conver(tiempos)
}

tiempo((tiempo)=> {
  tiempo.map((tiempo)=>{
    if (tiempo / 60 >= 2){
      console.log(tiempo)
    }
  })
}, [342, 48, 6, 94]);

