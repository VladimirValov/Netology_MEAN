function Pokemon( name, level ) {
  this.name = name;
  this.level = level;
}

Pokemon.prototype.show = function () {
  console.log( `Pokemon: ${this.name}\nLevel: ${this.level}` );
}


function PokemonList( arr ) {
  this.arr = arr;

}
PokemonList.prototype.add = function ( pokemon ) {
  this.arr.push( pokemon );
  console.log( "Добавлен ", pokemon );
}

PokemonList.prototype.show = function () {
  this.arr.forEach( (pokemon) => console.log( pokemon ) );
}

module.exports = { Pokemon, PokemonList };
