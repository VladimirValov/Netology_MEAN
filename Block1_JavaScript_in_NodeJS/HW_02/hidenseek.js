const fs = require( "fs" );

function makeFolder ( path ) {

  if ( fs.existsSync( path ) ) {
    console.log( "Folder /" + path + " has already" );
   }

  else {
    fs.mkdir ( path );
    console.log( "Folder /" + path + " created");
   }
}


function randomInt ( min, max ) {
  return Math.floor( Math.random() * ( max + 1 - min ) ) + min
}


function randomItemFromArray( arr, maxAmount ) {
  let amountItem = ( maxAmount < arr.length ) ? maxAmount : arr.length;
  let resultItem = [];

  for (i = 0; i < randomInt( 1, amountItem ) ; i++) {
    resultItem.push( arr[ randomInt( 0, arr.length -1 ) ]  );
  }

  return resultItem;
}


function hide( path, pokemons ) {

  return new Promise( (resolve, reject) => {
    console.log("Hide in Folder /" + path, pokemons);

    let randomPokemons = randomItemFromArray( pokemons, 3 );
    let targetPokemon = "";

    randomPokemons.forEach( (item) => ( targetPokemon += item + "\n" ) );

    fs.writeFile( path + "/" + "pokemon.txt", targetPokemon, ( err ) => {

      if (err) {
        reject(err);
      }

//      console.log( " Saved" );
//      console.log( targetPokemon );
    });

     resolve(targetPokemon);
  } );

}


function seek( path ) {
  // console.log( "Find in Folder " + path );

  return new Promise( (resolve, reject) => {

      let findPokemon = "";

      fs.readFile( path + "/" + "pokemon.txt", (err, data) => {
        if (err) {
          reject (err);
        }

          findPokemon = data.toString();
        //  console.log( findPokemon );
           resolve( findPokemon.match( /[a-z0-9]*\|[0-9]*/gi ) );



      } );
  } );
}

module.exports = { makeFolder, hide, seek };
