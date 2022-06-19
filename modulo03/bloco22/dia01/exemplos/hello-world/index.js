const readline = require('readline-sync');

console.log(readline);

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Olá, ${name}! Você tem ${age} anos de idade!`);
