const Pokemon = require ( "./pokemon" ).Pokemon;
const PokemonList = require ( "./pokemon" ).PokemonList;
const pokemonsArray = require( "./pokemonsArray" );

console.log( pokemonsArray );

let pokenonsArrayObject = pokemonsArray.map(
  (pokemon) => new Pokemon( pokemon.name, pokemon.level  )
);

let pik = new Pokemon( "Pikachu", 10 );

const pikList = new PokemonList( pokenonsArrayObject );
console.log( pikList.show() );
pikList.add( pik );
console.log( pikList.show() );
