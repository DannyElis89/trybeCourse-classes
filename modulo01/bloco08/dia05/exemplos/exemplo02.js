
const user = {
  nome: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const pessoaTrappistEnterprise = {
  ...user,
  ...jobInfos,
};

// console.log(pessoaTrappistEnterprise);

const {nome, age, nationality, profession, squad, squadInitials} = pessoaTrappistEnterprise;

console.log(`Hi, my name is ${nome}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}. `);
