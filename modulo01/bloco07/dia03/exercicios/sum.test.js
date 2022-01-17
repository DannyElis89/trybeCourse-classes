const sum = require('./sum');

describe('Verifica se a função soma está funcionando corretamente.', () => {
  it('Verifica se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Verifica se ambos valores são do tipo number', () => {
     expect(sum('1', 2)).toThrowError(new Error('Os parâmetros precisam ser valores numéricos.'));
     expect(sum(1, '2')).toThrowError(new Error('Os parâmetros precisam ser valores numéricos.'));
   });

});
