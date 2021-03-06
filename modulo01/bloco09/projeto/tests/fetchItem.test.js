require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  test('Verifica se fetchItem é uma função', async () => {
    expect(typeof fetchItem).toBe('function');
  })

  test('Executa a função fetchItem com o argumento do item "MLB1615760527" e testa se fetch foi chamado com o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })

  test('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  })

  test('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  })
});
