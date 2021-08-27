
class Animal {

  // atributos
   constructor(tipo, numPatas){
     this.tipo = tipo
     this.numPatas = numPatas
   }
  //  metodos
  comer (alimetos){
    return `Los animales de tipo ${this.tipo} se alimentan de ${alimetos}`
  }

  sonido (comunicacion){
    return `Los perros   ${this.tipo} hacen ${comunicacion}  `
  }

}

const gato = new Animal('felino', 4, 'miu');
const coco = new Animal('reptil', 4);
const spider = new Animal('aracnico', 8);
const perro = new Animal('felino', 4);


console.log(gato);
console.log(coco);
console.log(spider);
console.log(perro);


console.log(gato.comer('ratones'));
console.log(coco.comer('carne podrida'));
console.log(spider.comer('insectos'));
console.log(perro.sonido('woooooo'));
