const getSavedCartItems = () => {
  // Requisito 04: Carregue o carrinho de compras através do LocalStorage ao iniciar a página
  // Recupera itens do carrinho de localStorage
  let listaCarrinho = document.getElementsByClassName('cart__items');
  listaCarrinho = localStorage.getItem('cartItems');
  return listaCarrinho;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
