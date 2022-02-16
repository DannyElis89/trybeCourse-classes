async function fetchItem(idProduto) {
  const url = `https://api.mercadolibre.com/items/${idProduto}`;
  try {
    const resposta = await fetch(url);
    const resultados = await resposta.json();
    return resultados;
  } catch (error) {
    return new Error('You must provide an url');
  }
}

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
