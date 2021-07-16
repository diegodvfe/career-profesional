


// let name = document.getElementById('nombre')
// let enterNombre = document.getElementById('enterNombre')
// let resetName = document.getElementById('resNombre')

// let adress = document.getElementById('directio')
// let enterAdress = document.getElementById('enterAdress')
// let resAdr = document.getElementById('resAdr')

// function cambio (){

// }

let name1 = document.getElementById('name1')
let adress = document.getElementById('adress')
let phone = document.getElementById('phone')
let boton = document.getElementById('boton')
let hawainaImg = document.getElementById('hawaina')
let jamon = document.getElementById('jamon')
let peperoni = document.getElementById('peperoni')
let carnes = document.getElementById('carnes')
let respuesta = document.getElementById('respuesta')
let card = document.getElementById('card')

// console.log(name1);
// console.log(adress);
// console.log(phone);
// console.log(boton);
// console.log(hawainaImg);
// console.log(jamon);
// console.log(peperoni);
// console.log(carnes);
// console.log(respuesta);
// console.log(card);

function ordena (){

  let text = input.value
  name1.innerHTML = ''
  adress.innerHTML = ''
  respuesta.innerHTML = text
  if (mostrar === true) {
    card.classList.remove('none')
    mostrar = false
  } else if (mostrar === false) {
    card.classList.add('none')
    mostrar = true
  }
  hawainaImg.src = 'https://pm1.narvii.com/6626/f8dd4deaa6aaf5bebf357cb45bb668b6d6c3a1b5_128.jpg'
}

boton.addEventListener('ordena', cambio)


