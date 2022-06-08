const operacoes = require('./operacoes');
const readLine = require('readline-sync');


console.log('Calculadora simples');
const num1 = readLine.questionInt('Digite um número inteiro: ');
const oper = readLine.question('Digite a operação desejada (+, -, *, /): ')
const num2 = readLine.questionInt('Digite outro número inteiro: ');

switch(oper) {
  case '+':
    operacoes.sum(num1, num2)
    break;
  case '-':
    operacoes.sub(num1, num2)
    break;
  case '/':
    operacoes.div(num1, num2)
    break;
  case '*':
    operacoes.mult(num1, num2)
    break;
  default:
      console.log('Operação desconhecida ou inválida. Por favor, insira uma operação válida (+, -, *, /).')
}
