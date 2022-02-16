require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  test('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  test('Verifica e ao chamar fetchProducts a função fetch é chamada com o endpoint correto', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })

});
