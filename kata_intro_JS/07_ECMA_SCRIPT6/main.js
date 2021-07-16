

// First challenge to mkk
(function (){

// variable global
// let oracioin = prompt('Ingresa tu frase')

                //ingreso de parametro
                // oracion
  const polindromo = (oracion) =>{

    // let oracion = prompt('ingresa una frase:').toLocaleLowerCase()
                                       //  cadena de texto
    let text = oracion.split('').reverse().join('').replaceAll(' ', '')
    let oracionValue = oracion.replaceAll(' ', '')
    if (oracionValue === text){
      return true
    }else {
      return false
    }
    // console.log(oracion);
    // console.
  }

  console.log(polindromo('anita lava la tina'))



 let countries = ['Mexico', 'Guatemala', 'El Salvador','Estados Unidos de America' ]
const longestCountry = () =>{

  let theLongest = countries=[0]

  for (let country of countries){
    if (country.length > theLongest.length){
      theLongest = country;
    } else{
      theLongest = theLongest
    }
  }
  return theLongest

}

console.log(longestCountry());

// segunda forma de realizar el ejercicio

 const longestCountry2 = (countries)=>{
  //  .map es un ciclo for que recorre el arreglo
    let inNumber = countries.map(country =>{
      // console.log(country)
      let valueCountry = country.replaceAll(' ', '')
      return valueCountry.length
    })
    // console.log(...inNumber)
    // metodo Math.max se usa para saber el valor maximo
    let max = Math.max(...inNumber)
    // console.log(max)
    // filter me va a regresar el pais con mayor longitud
    let nameLarger = countries.filter(country => {
      let valueCountry = country.replaceAll(' ','' )
      // si la longitud coincide con el maximo regresa el nombre
      valueCountry.length === max
      if ( valueCountry.length === max){
        return valueCountry
      }
    })
    return nameLarger
    }

    console.log(longestCountry2());

    })

//  challenge 3

const farenheitTocelsius = (fahrenheit) =>{
   let valueF = Number(fahrenheit)
   let celsius = (valueF -32) *5 /9

   return `${valueF} grados Farenheit valen: ${celsius} grados celsius`
}

console.log(farenheintTocelsius(189));

// challenge 4

const numberParms= (...params) =>{
    return `${params.length} parametros`
}
console.log( numberParms());
