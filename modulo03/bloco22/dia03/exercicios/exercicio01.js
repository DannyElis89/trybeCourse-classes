function verificaNumero(num) {
  if (num === 0) { return 'neutro'; }
  if (num > 0) { return 'positivo'; }
  if (num < 0) { return 'negativo'; }
  return 'o valor deve ser um número';
};

module.exports = { verificaNumero };

// console.log(verificaNumero(6));
// console.log(verificaNumero(-6));
// console.log(verificaNumero(0));
