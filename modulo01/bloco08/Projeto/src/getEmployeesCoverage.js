// const { species } = require('../data/zoo_data');
// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function filtraRegião(ids) {
  const todosIdsAnimais = data.species.filter((cadaAnimal) => ids.includes(cadaAnimal.id));
  const especie = todosIdsAnimais.map((cadaAnimal) => cadaAnimal.name);
  const locations = todosIdsAnimais.map((cadaAnimal) => cadaAnimal.location);

  return {
    species: especie,
    locations,
  };
}

function filtraNome(parametro) {
  const nomeFuncionario = data.employees
    .filter((nome) => nome.firstName === parametro.name
      || nome.lastName === parametro.name
      || parametro.id === nome.id)[0];
  const animais = nomeFuncionario.responsibleFor;
  const chaves = filtraRegião(animais);

  return {
    id: nomeFuncionario.id,
    fullName: `${nomeFuncionario.firstName} ${nomeFuncionario.lastName}`,
    ...chaves,
  };
}

function testaParametro(parametro = {}) {
  const valoresParametro = Object.values(parametro);
  return data.employees.find((employee) => (
    valoresParametro.includes(employee.firstName)
      || valoresParametro.includes(employee.lastName)
      || valoresParametro.includes(employee.id)
  ));
}

function getEmployeesCoverage(parametro) {
  if (!testaParametro(parametro) && parametro !== undefined) {
    throw new Error('Informações inválidas');
  }

  if (parametro === undefined) {
    return data.employees
      .map((cadaFuncionario) => filtraNome(cadaFuncionario));
  }

  return filtraNome(parametro);
}

module.exports = getEmployeesCoverage;
