const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
function comparaNumeros(a,b) {
  if (a == b) return 0;
  if (a < b) return -1;
  if (a > b) return 1;
}
const novoArray = oddsAndEvens.sort(comparaNumeros);
let frase = '';

for (let i = 0; i < novoArray.length; i += 1) {
  const cadaItem = novoArray[i];
  if (i < novoArray.length - 1) {
    frase += `${cadaItem}, `;
  } else {
    frase += `e ${cadaItem}`;
  }
}


console.log(`Os números ${frase} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
// console.log(novoArray);
