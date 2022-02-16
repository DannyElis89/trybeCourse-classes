const saveCartItems = (parametro) => {
  // Requisito 04: Carregue o carrinho de compras através do LocalStorage ao iniciar a página
  // Salva itens do carrinho no localStorage
  localStorage.setItem('cartItems', parametro);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
