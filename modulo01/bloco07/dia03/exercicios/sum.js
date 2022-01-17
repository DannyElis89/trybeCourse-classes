function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os parâmetros precisam ser valores numéricos.');
  }
  console.log(a + b);
  return a + b;
}

module.exports = sum;

// sum(4, 5);

