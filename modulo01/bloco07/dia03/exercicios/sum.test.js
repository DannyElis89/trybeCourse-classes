const sum = require('./sum');

describe('Verifica se a função soma está funcionando corretamente.', () => {
  it('Verifica se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Verifica se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Verifica se ambos valores são do tipo number e se a função retorna mensagem de erro ao receber um input do tipo diferente de Number.', () => {
     expect(() => sum('1', 2)).toThrowError('Os parâmetros precisam ser valores numéricos.');
     expect(() => sum(1, '2')).toThrowError('Os parâmetros precisam ser valores numéricos.');
   });
});
