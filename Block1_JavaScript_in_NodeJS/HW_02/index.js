const makeFolder = require ( "./hidenseek" ).makeFolder;
const hide = require ( "./hidenseek" ).hide;
const seek = require ( "./hidenseek" ).seek;

/*
for (i = 1; i <= 10; i++) {

  ( i < 10 )
    ? makeFolder( "0" + i )
    : makeFolder( i.toString() )

}*/
const pokemonList = [
  "Charmander|300",
  "Oniks|500",
  "Kiska|100",
  "Barsik|200"
];

let path = "09";

hide( path, pokemonList )
.then( (data) => {
  console.log("hide")
  console.log(data)
} )
  .then( () => seek(path) )
  .then( (data) => {
    console.log("seek");
    console.log(data)
  } );
