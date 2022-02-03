const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age1) {
  return data.species.filter(({ name }) => animal === name)
    .every(({ residents }) => residents.every(({ age }) => age >= age1));
}

module.exports = getAnimalsOlderThan;
