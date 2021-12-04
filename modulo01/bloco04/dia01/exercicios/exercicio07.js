// 07 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
  //  * Porcentagem >= 90 -> A
  //  * Porcentagem >= 80 -> B
  //  * Porcentagem >= 70 -> C
  //  * Porcentagem >= 60 -> D
  //  * Porcentagem >= 50 -> E
  //  * Porcentagem < 50 -> F
  //  * O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

function notaParaConceito(x){
  if(x <= 100 && x >= 90){
    return 'A';
  }else if(x >= 80 && x < 90){
    return 'B';
  } else if(x >= 70 && x < 80){
    return 'C';
  }else if(x >= 60 && x < 70){
    return 'D';
  } else if(x >= 50 && x < 60){
    return 'E';
  } else if (x < 50 && x >= 0){
    return 'F';
  } else {
    return 'Erro: nota inválida! Por favor verifique o valor inserido.'
  }
};

let nota = -49;
console.log(notaParaConceito(nota));
