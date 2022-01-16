function fatorial(num) {
  let numeros = '';
  let fatorialCalc = 1;
  for (let i = num; i > 0; i -= 1) {
    if (i > 1) {
      numeros += ` ${i} *`;
      fatorialCalc *= i;
    } else {
      numeros += ` ${i}`;
      fatorialCalc *= i;
    }
  }
  const frase = `O fatorial de ${num} é: ${num}! = ${numeros} = ${fatorialCalc}`;
  return frase;
}
console.log(fatorial(10));
