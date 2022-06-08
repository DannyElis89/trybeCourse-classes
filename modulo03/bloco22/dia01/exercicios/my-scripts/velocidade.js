const readline = require('readline-sync');

const velocidade = (distancia, tempo) => {
  const velocidadeMedia = (distancia / tempo);

  return velocidadeMedia;
};

function main (){
  const distancia = readline.questionInt('Distância percorrida (em metros): ');
  const tempo = readline.questionInt('Tempo gasto (em segundos): ');

  const velocidadeMed = velocidade(distancia, tempo);

  console.log(`Velocidade média: ${velocidadeMed.toFixed(2)} m/s`);
}

main();

module.exports = { velocidade };
