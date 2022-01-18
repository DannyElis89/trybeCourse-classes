const { encode, decode } = require('./encodeDecode');

describe('Testando comportamento das funções encode e decode', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof(encode)).toBe('function');
    expect(typeof(decode)).toBe('function');
  });
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  });
  it('Para a função decode teste se as vogais 1, 2, 3, 4 e 5 são convertidas em a, e, i, o, u, respectivamente', () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('c')).toBe('c');
    expect(encode('f')).toBe('f');
    expect(decode('t')).toBe('t');
    expect(decode('p')).toBe('p');
  });
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    const string1 = 'Olá, tudo bem?';
    const string2 = 'Olá, t5d4 b2m?';

    expect(encode(string1).length).toBe(14);
    expect(decode(string2).length).toBe(14);
  });
})



// it('Verifica se o retorno de sum(4, 5) é 9', () => {
//   expect(sum(4, 5)).toBe(9);
// });
// expect(() => sum(1, '2')).toThrowError('Os parâmetros precisam ser valores numéricos.');
