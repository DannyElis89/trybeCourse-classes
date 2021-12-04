// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 888;
const b = 487329;
const c = 948377239432;

function comparaNumeros(x, y, z){
  if(x > y && x > z ){
    return x;
  }else if(y > x && y > z){
    return y;
  }else{
    return z;
  };
};
console.log('Dados os números ' + a + ', ' + b + ' e ' + c +', o maior entre eles é o ' + comparaNumeros(a, b, c)+ '.');
