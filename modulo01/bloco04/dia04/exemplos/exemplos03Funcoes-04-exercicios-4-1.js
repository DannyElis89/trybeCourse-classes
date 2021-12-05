// 04 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.


function positivoNegativo(x){
  if( x >= 0){
    return 'número positivo'
  }else if (x < 0){
    return 'número negativo'
  }
}

const number = -83297392873;
console.log('O número ' + number + ' é um ' + positivoNegativo(number) + '.')
