// 7. Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
people.sort((pessoa1, pessoa2) => pessoa1.age - pessoa2.age);

console.log(people);

// 8. Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente .

people.sort((pessoa1, pessoa2) => pessoa2.age - pessoa1.age);

console.log(people);
