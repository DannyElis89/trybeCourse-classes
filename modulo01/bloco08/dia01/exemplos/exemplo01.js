// Ao chamar a função doingThings:
const wakeUp = () => 'Acordando!!';

const breakFast = () => 'Bora tomar café!!';

const doingThings = (parametro) => parametro;

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

console.log(doingThings(wakeUp()));
console.log(doingThings(breakFast()));
