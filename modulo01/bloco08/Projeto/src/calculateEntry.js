const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, pessoa) => {
    if (pessoa.age < 18) acc.child += 1;
    if (pessoa.age >= 18 && pessoa.age < 50) acc.adult += 1;
    if (pessoa.age >= 50) acc.senior += 1;

    return { ...acc };
  }, {
    adult: 0,
    child: 0,
    senior: 0,
  });
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  const actual = countEntrants(entrants);

  return (actual.adult * 49.99) + (actual.child * 20.99) + (actual.senior * 24.99);
}

module.exports = { calculateEntry, countEntrants };
