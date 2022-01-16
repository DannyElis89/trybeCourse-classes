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
      console.log(`Nome da habilidade: ${property}, Nível: ${parametro[property]}`);
  }
}

exibeHabilidades(student);
