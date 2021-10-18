function generateRandomPokemonId() {
  return Math.floor(Math.random() * 151) + 1;
}

export default generateRandomPokemonId;