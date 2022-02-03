// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function indefinido() {
  return data.species.reduce((acc, animal) => {
    acc[animal.location].push(animal.name);
    return acc;
  }, {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  });
}

// ---------------------------

function retornaAnimais(cadaEspecie, { sex = '' }) {
// { sex = '' } =>  Se não existir a chave 'sex' em options, ele coloca '',
// para que no includes ao comparar com male ou female.

  return data.species.filter((especie) => especie.name === cadaEspecie)[0].residents
    .filter((animal) => animal.sex.includes(sex));
}

// ---------------------------

function retornaNomesAnimais(animais) {
  const nomesAnimais = [];
  animais.map((cadaAnimal) => nomesAnimais.push(cadaAnimal.name));
  return nomesAnimais;
}

// ---------------------------

function includeNames(options) {
  const animaisArea = indefinido();
  const obj = {};

  Object.keys(animaisArea).forEach((cadaArea) => {
    obj[cadaArea] = animaisArea[cadaArea].map((cadaEspecie) => {
      const retornaTodosAnimais = retornaAnimais(cadaEspecie, options);
      const arrayNomesAnimais = retornaNomesAnimais(retornaTodosAnimais);

      if (options.sorted === true) return { [cadaEspecie]: arrayNomesAnimais.sort() };

      return { [cadaEspecie]: arrayNomesAnimais };
    });
  });
  return obj;
}

// ---------------------------

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) return indefinido();

  return includeNames(options);
}

module.exports = getAnimalMap;
