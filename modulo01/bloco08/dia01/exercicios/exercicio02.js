const geraNumero = (min, max) => {
  const range = (max + 1) - min;
  let novoNum = 0;
  do {
    novoNum = Math.floor(Math.random() * range + min);
  } while (novoNum > max);
  console.log(novoNum);
  return novoNum;
};

const numeroApostado = (min, max) => {
  const range = (max + 1) - min;
  let novoNum = 0;
  do {
    novoNum = Math.floor(Math.random() * range + min);
  } while (novoNum > max);
  console.log(novoNum);
  return novoNum;
};

const checkNumbers = () => geraNumero(1, 5) === numeroApostado (1, 5) ? true : false;

const resultado = () => checkNumbers() === true ? 'Parabéns você ganhou!' : 'Tente novamente';

console.log(resultado());


