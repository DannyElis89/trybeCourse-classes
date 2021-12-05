// 03 - Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let maiorPalavra = '';

for(let index = 0; index < array.length; index += 1){
  if(array[index].length >= maiorPalavra.length){
    maiorPalavra = array[index];
  };
};
console.log('A maior palavra do array é ' + maiorPalavra);

let menorPalavra = 'maiorPalavra';

for(let index = 0; index < array.length; index += 1){
  if(array[index].length <= menorPalavra.length){
    menorPalavra = array[index];
  };
};
console.log('A menor palavra do array é ' + menorPalavra);
