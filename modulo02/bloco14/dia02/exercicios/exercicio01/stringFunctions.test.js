const stringFunctions = require('./stringFunctions');

describe('Verifica funcionamento da função upperCase', () => {
  test('Verifica se a função é chamada:', () => {
    stringFunctions.upperCase = jest.fn();
    stringFunctions.upperCase();
    expect(stringFunctions.upperCase).toHaveBeenCalled();
  });

  test('Verifica se a função upperCase, ao receber uma string, retorna a mesma em letras maiúsculas:', () => {
    stringFunctions.upperCase = jest.fn().mockReturnValue('TESTANDO STRING');
    expect(stringFunctions.upperCase('testando string')).toBe('TESTANDO STRING');
  });
});

describe('Verifica funcionamento da função firstLetter', () => {
  test('Verifica se a funçao firstLetter é chamada:', () => {
    stringFunctions.firstLetter = jest.fn();
    stringFunctions.firstLetter();
    expect(stringFunctions.firstLetter).toHaveBeenCalled();
  });

  test('Verifica se a função firstLetter, ao receber uma string, retorna a sua primeira letra:', () => {
    stringFunctions.firstLetter = jest.fn().mockReturnValue('t');
    expect(stringFunctions.firstLetter('testando string')).toBe('t');
  });
})

describe('Verifica funcionamento da função concatString', () => {
  test('Verifica se a funçao concatString é chamada:', () => {
    stringFunctions.concatString = jest.fn();
    stringFunctions.concatString();
    expect(stringFunctions.concatString).toHaveBeenCalled();
  });

  test('Verifica se a função concatString, ao receber duas strings, retorna uma strinf formada pelos dois parâmetros concatenados:', () => {
    stringFunctions.concatString = jest.fn().mockReturnValue('testandostring');
    expect(stringFunctions.concatString('testando string')).toBe('testandostring');
  });
})

describe('Implementa novo funcionamento na função upperCase', () => {
  test('Verifica se a função upperCase, ao receber uma string, retorna a mesma em letras minúsculas:', () => {
    const mockUpperCase =  jest.spyOn(stringFunctions, 'upperCase').mockImplementation(string => string.toLowerCase());

    expect(mockUpperCase('TESTANDO STRING')).toBe('testando string');
  });

  test('Restaurando implementção original da função upperCase e verificando o seu funcionamento', () => {
    stringFunctions.upperCase.mockRestore();

    stringFunctions.upperCase = jest.fn().mockReturnValue('TESTANDO STRING');
    expect(stringFunctions.upperCase('testando string')).toBe('TESTANDO STRING');
  })
});

describe('Implementa novo funcionamento na função firstLetter', () => {
  test('Verifica se a função firstLetter, ao receber uma string, retorna a mesma em letras minúsculas:', () => {
    const mockFirstLetter =  jest.spyOn(stringFunctions, 'firstLetter').mockImplementation(string => string[string.length - 1]);

    expect(mockFirstLetter('TESTANDO STRING')).toBe('G');
  });
});

describe('Implementa novo funcionamento na função concatString', () => {
  test('Verifica se a função concatString, ao receber uma string, retorna a mesma em letras minúsculas:', () => {
    const mockConcatString =  jest.spyOn(stringFunctions, 'concatString').mockImplementation((string1, string2, string3) => `${string1}${string2}${string3}`);

    expect(mockConcatString('testando', 'outra', 'string')).toBe('testandooutrastring');

  });
});


