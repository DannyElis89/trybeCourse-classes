// Requisito 01: Crie uma listagem de produtos
const fetchProducts = async (buscaItem) => {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${buscaItem}`;
  const resposta = await fetch(endpoint);
  const dados = await resposta.json();
  return dados;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
