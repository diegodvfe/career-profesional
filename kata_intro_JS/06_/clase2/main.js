// (function(){
//     // Todo el codigo JS AQUI
// })()

(function () {
  var nombre = document.getElementById('nombre')
  console.log(nombre);

  var email = document.getElementById('email')
  console.log(email);

  var tel = document.getElementById('tel')
  console.log(tel);

  var edad = document.getElementById('edad')
  console.log(edad);

  var btnGuardar = document.getElementById('guardar') // este es mi boton
  console.log(btnGuardar);

  // 1
//  Segundo formato de como escuchar un click
  btnGuardar.addEventListener('click', function (){ // ---> funcion anonima
      // alert('le dieron click al btn de guardar')
      console.log(nombre.value);
      console.log(email.value);
      console.log(tel.value);
      console.log(edad.value);
  })

//  2
  // Que va hacer mi boton cuando lo clicken
//   function clickEnGuardar(){
//     alert('le dieron click al boton de guardar')
//   }

// //  Escuchar cuando alguien le de click

  // btnGuardar.addEventListener('click', clickEnGuardar);

})()