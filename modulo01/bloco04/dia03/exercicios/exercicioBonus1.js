// Exercício 01: imprima na tela um quadrado feito de asteriscos de lado de tamanho n:

let n = 5;

for(let index = 0; index < n; index += 1){
  let linha = [];
  for(let indice = 0; indice < n; indice += 1){
    linha = linha += '*';
  }
  console.log(linha);
}

