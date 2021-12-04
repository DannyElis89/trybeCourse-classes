// 09 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
//* Bonus: use somente um if .

function temImpar(n1, n2, n3){
  if(n1 % 2 != 0 || n2 % 2 != 0 || n3 % 2 != 0 ){
    return true;
  }
  return false;
}

const a = 40;
const b = 50;
const c = 63;


console.log(temImpar(a, b, c))
