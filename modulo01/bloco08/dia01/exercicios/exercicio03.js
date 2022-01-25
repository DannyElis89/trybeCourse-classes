const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificaNota = (gabarito, teste) => {
  const gabarit = gabarito;
  const provaAluno = teste;
  let nota = 0;

  for (let i = 0; i < gabarit.length; i += 1){
    gabarit[i] === provaAluno[i] ? nota += 1 : nota -= 0.5
  };

  return nota;
}

const corrigeProva = (gabarito, respostas) => {
  const nota = verificaNota(gabarito, respostas);
  return `Nota: ${nota}.`;
};

console.log(corrigeProva(RIGHT_ANSWERS, STUDENT_ANSWERS));
