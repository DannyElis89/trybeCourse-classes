const myRemove = require('./myRemove');

describe('Verifica comportamento esperado da função myRemove()', () => {
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})




// it('Verifica se o retorno de sum(4, 5) é 9', () => {
//   expect(sum(4, 5)).toBe(9);
// });
// expect(() => sum(1, '2')).toThrowError('Os parâmetros precisam ser valores numéricos.');
