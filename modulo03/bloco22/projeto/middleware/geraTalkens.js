module.exports = (lenght) => {
  const allowedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  .split('');

  const arrayCharacters = [];

  for (let i = 0; i < lenght; i += 1) {
    const char = (Math.random() * (allowedCharacters.length - 1)).toFixed(0);

    arrayCharacters[i] = allowedCharacters[char];
  }

  return arrayCharacters.join('');
};

//
// https://stackoverflow.com/questions/8532406/create-a-random-token-in-javascript-based-on-user-details
