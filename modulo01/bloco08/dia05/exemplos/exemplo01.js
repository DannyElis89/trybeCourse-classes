// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'banana', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'mamão', 'melão'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
