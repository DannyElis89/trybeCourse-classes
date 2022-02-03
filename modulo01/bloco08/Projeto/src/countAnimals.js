const data = require('../data/zoo_data');

function countAnimals(...animal) {
  if (animal.length === 0) {
    return data.species
      .reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {});
  }

  const { specie } = animal[0];
  const especieFiltrada = data.species.filter(({ name }) => specie === name);

  let residentesFiltrados = especieFiltrada[0].residents;

  if (animal[0].sex !== undefined) {
    residentesFiltrados = residentesFiltrados.filter(({ sex }) => sex === animal[0].sex);
  }

  return residentesFiltrados.length;
}

module.exports = countAnimals;
