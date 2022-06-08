const readline = require('readline-sync');

const calcImc = (peso, alt) => {
  console.log(`Peso: ${peso}, Altura: ${alt}`);

  const alturaEmMetros = alt / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso / alturaAoQuadrado);

  return imc;
};

const categoriaIMC = (imc) => {
  console.log(imc);
  if (imc < 18.5) return 'Abaixo do peso (magreza)';
  if (imc < 25) return 'Peso normal';
  if (imc < 30) return 'Acima do peso (sobrepeso)';
  if (imc < 35) return 'Obesidade grau I';
  if (imc < 40) return 'Obesidade grau II';
  if (imc >= 40) return 'Obesidade graus III e IV';
}

function main() {
  const peso = readline.questionFloat('Qual o seu peso (em kg)?');
  const altura = readline.questionInt('Qual a sua altura (em cm)?');

  const imc = calcImc(peso, altura);
  const situacao =categoriaIMC(imc);

  console.log(`IMC: ${imc.toFixed(2)}`);
  console.log(`Situação: ${situacao}`);
}

main();

module.exports = { calcImc };
