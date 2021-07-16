

let lado = prompt('Ingrese el lado')

function cuadrado(a){
    console.log('El arer del cuadrado es '+ a*2)
}

cuadrado(console.log('El resultado es'))

let base = prompt('Ingrese el lado')
let altura = prompt('Ingrese el lado')

function rectangulo(q,y){
    console.log('El area del rectangulo es '+ q*y)
}
rectangulo();

function triangulo(r,t,){
  console.log('El area del triangulo es '+ (r*t)/2)
}

triangulo(prompt('Ingresa un numero'))

function edad(b){
  if(b>=18){
    console.log('tu eres mayor de' +b+ 'edad');
  }else if(b<18){
    console.log('tu no eres mayor de' +b+ 'edad')
  }
}
edad(prompt('Ingresa tu edad'));

function numero(g){
  if(n>0){
    console.log('EL numero ' +g+ 'es positivo')
  }else if(n<0){
    console.log('El numero ' +g+ 'es negativo')
  }else{
    console.warn('ingrese un numero');
  }
}

numero(prompt('ingrese un numero'));

let v1 = a;
let v2 = e;
let v3 = i;
let v4 = o;
let v5 = u;

let vocal2 = v1, v2, v3, v4, v5

function vocal(vocales){
  if (vocal2 === vocales) {
    console.log('Esta son la las' +vocales+ 'del abecedario');
  } else {
    console.log('Estas son consonantes');
  }
}

vocal(prompt('Ingrese su vocal'));