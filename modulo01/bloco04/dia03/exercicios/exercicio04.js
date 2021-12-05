
// 04 - Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let num = 50;
let primos = [];

for(let contador = num; contador > 0; contador -= 1){
  if(contador >= 0 && contador <= 10){
    if(contador == 7){
      primos.push(contador);
    }else if(contador == 5){
      primos.push(contador);
    }else if(contador == 3){
      primos.push(contador);
    }else if(contador == 1){
        primos.push(contador);
    };
  }else{
    if(contador % 2 != 0 && contador % 3 != 0 && contador % 4 != 0 && contador % 5 != 0 && contador % 6 != 0 && contador % 7 != 0 && contador % 9 != 0 && contador % 10 != 0){
      primos.push(contador);
    }
  }
  }

console.log(primos[0]);
console.log(primos);
