const fs = require('fs').promises;

// 4.1 Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

async function dataSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

  strings.forEach((string) => console.log(string));
};

// function readAll() {
//   fs.readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => {
//       const simpsons = JSON.parse(fileContent);
//       const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

//       strings.forEach((string) => console.log(string));
//     })
//     .catch((error) => console.log(error.message));
// }

// 4.2 Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

async function dataSimpsonsIs(id){
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!chosenSimpson) {
    throw new Error('id não encontrado');
  }
  return chosenSimpson;
};

// 4.3 Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

async function removeSimpson(){

}

async function main() {
  dataSimpsons();
  // readAll();
  const simpson = await dataSimpsonsIs(1);
  console.log(simpson);
};

main();
