// Situação 01: função que receba a média das notas de uma pessoa e responda se ela foi aprovada ou não;
function calculaSituacao(media) {
  if (media >= 7) {
    return 'aprovacao';
  }

  return 'reprovacao';
}

// module.exports = calculaSituacao;
// const calculaSituacao = require('./examples/calculaSituacao');

// Exemplos de testes manuais:

// Situação 01:

  console.log('Situação 01:', calculaSituacao(4));
  // console: reprovação

// Exemplo02:
  console.log('Situação 02: Quando a média for menor que 7, retorna "reprovacao":');
  const respostaCenario1 = calculaSituacao(4);
  if (respostaCenario1 === 'reprovado') {
    console.log(`Ok 🚀`);
  } else {
    console.error('Resposta não esperada 🚨');
  }
  // console:
  // Quando a média for menor que 7, retorna "reprovacao":
  // Ok 🚀

// Situação 03:
  console.log('Situação 03: Quando a média for maior que 7, retorna "aprovacao":');

  const respostaCenario2 = calculaSituacao(9);
  if (respostaCenario2 === 'aprovacao') {
    console.log(`Ok 🚀`);
  } else {
    console.error('Resposta não esperada 🚨');
  }
  // console:
  // Quando a média for maior que 7, retorna "aprovacao":
  // Ok 🚀

  console.log('Situação 04: Quando a média for igual a 7, retorna "aprovacao":');

  // Situação 04:
  const respostaCenario3 = calculaSituacao(7);
  if (respostaCenario3 === 'aprovacao') {
    console.log(`Ok 🚀`);
  } else {
    console.error('Resposta não esperada 🚨');
  }
  // console:
  // Quando a média for igual a 7, retorna "aprovacao":
  // Resposta não esperada 🚨
