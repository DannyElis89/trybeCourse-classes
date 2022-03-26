const service = require('./services');

test('Verifica se a função foi chamada, quantas vezes foi chamada e qual o seu retorno', () => {
  service.randomNum = jest.fn().mockReturnValue(10);

  expect(service.randomNum(0, 100)).toBe(10);
  expect(service.randomNum).toHaveBeenCalled();
  expect(service.randomNum).toHaveBeenCalledTimes(1);

});

test('mockando uma nova implementação à função, qu recebe dois parâmetros numéricos e deve retornar a divisãod o primeiro pelo segundo', () => {
  service.randomNum = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.randomNum(10, 2)).toBe(5);
  expect(service.randomNum).toHaveBeenCalled();
  expect(service.randomNum).toHaveBeenCalledTimes(1);
  expect(service.randomNum).toHaveBeenCalledWith(10, 2);

})
