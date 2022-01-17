const student = {
  HTML: 'Bom',
  CSS: 'Bom',
  Javascript: 'Ótimo',
  SoftSkills: 'Ótimo',
  Git: 'Médio',
};

function exibeHabilidades(parametro) {
  const chave = parametro.keys;
  for (const property in parametro) {
      console.log(`${property}, Nível: ${parametro[property]}`);
      return `${property}, Nível: ${parametro[property]}`;
  }
}

exibeHabilidades(student);
