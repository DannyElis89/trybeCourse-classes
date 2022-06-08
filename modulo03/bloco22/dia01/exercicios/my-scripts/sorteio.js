const readline = require('readline-sync');

const numRandom = () => {
  const numAleatorio = Math.floor((Math.random() * 11));
  return numAleatorio
}

function main() {
  const acerteNumero = readline.questionInt('Digite um número inteiro entre 0 e 10: ');
  const numSorteado = numRandom();

  acerteNumero === numSorteado
    ? console.log('Parabéns, número correto!')
    : console.log(`Opa, não foi dessa vez. O número era ${numSorteado}`);

}


main();
