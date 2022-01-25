const geraEmpregados = (fullName) => {
  const eMail = fullName.toLowerCase().split(' ').join('_');
  return {nome: fullName, email: `${eMail}@trybe.com`};
}

const newEmployees = (callback) => {
  const employees = {
    id1: geraEmpregados('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: geraEmpregados('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: geraEmpregados('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());
