const requests = require('request');


const pedirPokemon = () =>{
  requests.get('https://pokeapi.co/api/v2/pokemon/ditto', (error, response, body)=>{
    // console.log(error);
    console.log(response);
    // console.log(body);
  })
}

pedirPokemon()