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
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

// 4.4 Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

async function readAndCreat() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const familyIds = [1, 2, 3, 4];

  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id)));

    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
};

// 4.5 Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

async function adcMember() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');

  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

};

async function replacePerson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');
  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);

    return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
};

async function main() {
  dataSimpsons();
  // readAll();
  const simpson = await dataSimpsonsIs(1);
  console.log(simpson);

  const newArray = await removeSimpson();
  console.log(newArray);

  const familySimpson = await readAndCreat();
  console.log(familySimpson);

  const novaLista = await adcMember();
  console.log(novaLista);

  const replace = await replacePerson();
  console.log(replace);
};



main();
