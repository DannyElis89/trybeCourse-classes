import fetch from 'node-fetch';
// const fetch = require('node-fetch');

const pictures = () => {
  const pict = fetch('https://dog.ceo/api/breeds/image/random')
    .then(imagem => imagem
      .json()
      .then(json =>
        imagem.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );

  return pict;

}

// console.log(pictures());

module.exports = { pictures };
