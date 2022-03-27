const service = require('./service');

test('Verifica se a função foi chamada, quantas vezes foi chamada e qual o seu retorno', () => {
  service.randomNum = jest.fn().mockReturnValue(10);

  expect(service.randomNum(0, 100)).toBe(10);
  expect(service.randomNum).toHaveBeenCalled();
  expect(service.randomNum).toHaveBeenCalledTimes(1);

});

describe('Testando implementações', () => {
  test('mockando uma nova implementação à função, qu recebe dois parâmetros numéricos e deve retornar a divisãod o primeiro pelo segundo', () => {
    service.randomNum = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(service.randomNum(10, 2)).toBe(5);
    expect(service.randomNum).toHaveBeenCalled();
    expect(service.randomNum).toHaveBeenCalledTimes(1);
    expect(service.randomNum).toHaveBeenCalledWith(10, 2);

  })

  test('mockando uma nova implementação à função, que deve receber três parametros e retornar sua multiplicação', () => {
    service.randomNum.mockReset();
    expect(service.randomNum).toHaveBeenCalledTimes(0);

    service.randomNum = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

    expect(service.randomNum(2, 3, 4)).toBe(24);
    expect(service.randomNum).toHaveBeenCalled();
    expect(service.randomNum).toHaveBeenCalledTimes(1);
    expect(service.randomNum).toHaveBeenCalledWith(2, 3, 4);
  });

  test('mockando implementação da função que recebe um parametro e retorna o seu dobro', () => {
    service.randomNum.mockReset();
    expect(service.randomNum).toHaveBeenCalledTimes(0);

    service.randomNum = jest.fn().mockImplementationOnce(num => num * 2);

    expect(service.randomNum(2)).toBe(4);
    expect(service.randomNum).toHaveBeenCalled();
    expect(service.randomNum).toHaveBeenCalledTimes(1);
    expect(service.randomNum).toHaveBeenCalledWith(2);
  })
})

