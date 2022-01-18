const myFizzBuzz = require('./myFizzBuzz');

describe('Verifica o comportamento da função myFizzBuzz', () => {
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é "fizz"', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o o próprio número de entrada', () => {
    expect(myFizzBuzz(11)).toBe(11);
  });
  it('Faça uma chamada com um parâmetro que não é um número e "false"', () => {
    expect(myFizzBuzz('A')).toBe(false);
  });
})



