// Exercício 02: imprima um triângulo retângulo com n asteriscos de base.
let n = 5;
let linha = [];

for(let index = 0; index < n; index += 1){
  linha = linha += '*';
  console.log(linha);
}
