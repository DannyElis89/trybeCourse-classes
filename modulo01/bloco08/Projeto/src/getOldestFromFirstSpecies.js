const data = require('../data/zoo_data');

function filtraEmpregado(id) {
  const empregado = data.employees.filter((nome) => nome.id === id);
  return empregado[0].responsibleFor;
}

function comparaIdadeAnimal(arrayEspeciesAnimais) {
  const dados = data.species;
  return dados.filter((especie) => arrayEspeciesAnimais.includes(especie.id))
    .map((especie) => Object.values(especie.residents
      .reduce((acc, cadaAnimal) => (cadaAnimal.age > acc.age ? cadaAnimal : acc))));
}

function getOldestFromFirstSpecies(id) {
  const idEspeciesAnimaisEmpregado = filtraEmpregado(id);

  const arrayanimalMaisVelho = comparaIdadeAnimal(idEspeciesAnimaisEmpregado)[0];

  return arrayanimalMaisVelho;
}

module.exports = getOldestFromFirstSpecies;
