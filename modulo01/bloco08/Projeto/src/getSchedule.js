const data = require('../data/zoo_data');

function getAnimalsExhibition(dia) {
  return data.species.filter((animais) => animais.availability
    .includes(dia)).map((animal) => animal.name);
}

function indefinido() {
  const diasSemana = Object.keys(data.hours);
  const obj = diasSemana.reduce((acc, dia) => {
    const horario = (data.hours[dia].open === 0) ? 'CLOSED'
      : `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`;
    const animaisExibidos = (data.hours[dia].open === 0) ? 'The zoo will be closed!'
      : getAnimalsExhibition(dia);

    return {
      ...acc,
      [dia]: {
        officeHour: horario,
        exhibition: animaisExibidos,
      },
    };
  }, {});

  return obj;
}

function programacaoDia(diaSemana) {
  const rotinaSemanal = indefinido();
  return { [diaSemana]: rotinaSemanal[diaSemana] };
}

function exibicaoEspecie(especie) {
  return data.species.filter((especieAnimal) => especieAnimal.name === especie)[0].availability;
}

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const zooAnimals = data.species.map((animais) => animais.name);

function getSchedule(scheduleTarget) {
  if (zooAnimals.includes(scheduleTarget)) return exibicaoEspecie(scheduleTarget);
  if (weekDays.includes(scheduleTarget)) return programacaoDia(scheduleTarget);
  if (scheduleTarget === undefined || !weekDays.includes(scheduleTarget)) return indefinido();
}

module.exports = getSchedule;
