const jimp = require('jimp');
const path = require('path');

const READ_FOLDER = '../assets/pokemons/images';
const WRITE_FOLDER = '../assets/pokemons/silhouettes';

async function createSilhouette(pokemonId) {
  const image = await jimp.read(path.join(__dirname, READ_FOLDER, `${pokemonId}.png`));

  image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
    if (image.bitmap.data[idx] >= 0) {
      image.bitmap.data[idx] = 0;
      image.bitmap.data[idx + 1] = 0;
      image.bitmap.data[idx + 2] = 0;
      image.bitmap.data[idx + 3] = image.bitmap.data[idx + 3];
    }
  });

  image.write(path.join(__dirname, WRITE_FOLDER, `${pokemonId}.png`));
  console.log('Generated silhouette for pokmeon: ', pokemonId);
}

for (let pokemonId = 1; pokemonId <= 151; pokemonId++) {
  createSilhouette(pokemonId);
}