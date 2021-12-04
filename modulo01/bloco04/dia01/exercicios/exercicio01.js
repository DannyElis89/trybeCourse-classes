// 01. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
const a = 10;
const b = 5;


function somaFunction(x, y){
  let soma = (x + y);
  return soma;
};
console.log('O resultado da soma entre ' + a + ' e ' + b + ' é igual a ' + somaFunction(a, b));

function subtracaoFunction(x, y){
  let subtracao = x - y;
  return subtracao;
}
console.log('O resultado da subtração entre ' + a + ' e ' + b + ' é igual a ' + subtracaoFunction(a, b));

function multiplicaFunction(x, y){
  let multiplica = x * y;
  return multiplica;
}
console.log('O resultado da multiplicação entre ' + a + ' e ' + b + ' é igual a ' + multiplicaFunction(a, b));

function divisaoFunction(x, y){
  let divisao = x / y;
  return divisao;
}
console.log('O resultado da multiplicação entre ' + a + ' e ' + b + ' é igual a ' + divisaoFunction(a, b));

function moduloFunction(x, y){
  let modulo = x % y;
  return modulo;
}
console.log('O resto da divisão inteira entre ' + a + ' e ' + b + ' é igual a ' + moduloFunction(a, b));



