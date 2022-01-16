const skills = ['Javascript', 'HTML', 'CSS', '#goTrybe'];

const substituiLetra = (nome, frase) => {
  const posicao = frase.indexOf('x');

  const novaFrase = `${frase.slice(0, posicao - 1)} ${nome}${frase.slice(posicao+1)}`

  return novaFrase;
}

const minhasSkills = (frase, skills) => {
  const novaFrase = ` ${frase} Minhas principais habilidades são:
    ${skills[0]};
    ${skills[1]};
    ${skills[2]};
    ${skills[3]}`
    return novaFrase;
}

const frase = substituiLetra('Danny', 'Tryber x aqui!');
console.log(minhasSkills(frase, skills));
