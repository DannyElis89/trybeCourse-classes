// 02 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const a = 74;
const b = 105;

function comparaNumero(x, y){
  if(x > y){
    return x;
  } else{
    return y;
  }
}
console.log('Entre ' + a + ' e ' + b + ' o maior é ' + comparaNumero(a, b));
