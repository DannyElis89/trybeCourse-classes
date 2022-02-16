function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

// Requisito 05: Some o valor total dos itens do carrinho de compras

async function somaValores() {
  let soma = 0;

  const lis = document.getElementsByClassName('cart__item');
  const arrayLis = [...lis];

  arrayLis.forEach((element) => {
    const textoArray = element.innerText;
    const preco = Number(textoArray.split('PRICE: $')[1]);
    (soma += preco);
  });

  document.getElementsByClassName('total-price')[0].innerText = soma;
}

// Requisito 03: Remova o item do carrinho de compras ao clicar nele
function cartItemClickListener(event) {
  event.target.remove();

  // req 5
  somaValores();
  // Remove item do carrinho quando clicado
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

// Requisito 02: Adicione o produto ao carrinho de compras
// Você deve utilizar a função createCartItemElement() para criar os componentes HTML referentes a um item do carrinho.

async function createCartItemElement(produto) {
  const li = document.createElement('li');
  li.className = `cart__item ${produto.id}`;
  li.innerText = `SKU: ${produto.id} | NAME: ${produto.title} | PRICE: $${produto.price}`;
  li.addEventListener('click', cartItemClickListener); // Remove item do carrinho quando clicado
  return li;
}

const createCartShopping = async (sku) => {
  const olItensCarrinho = document.getElementsByClassName('cart__items')[0];
  const produto = await fetchItem(sku);

  // Adicione o elemento retornado da função createCartItemElement(product) como filho do elemento <ol class="cart__items">

  const li = await createCartItemElement(produto);
  olItensCarrinho.appendChild(li);
  // req 5
  somaValores();

  // Requisito 04: Carregue o carrinho de compras através do LocalStorage ao iniciar a página
  // Salva itens do carrinho no localStorage

  saveCartItems(olItensCarrinho.innerHTML);
};

// Requisito 07: Adicione um texto de "carregando" durante uma requisição à API
  // Crie um elemento que contenha o texto "carregando...", que deve ser exibido em algum lugar da página;
  // Este elemento deve ser mostrado apenas durante a requisição à API;
  // Este elemento deve obrigatoriamente ter a classe loading;

function aguardaAPI() {
  document.getElementsByClassName('loading')[0].innerText = 'carregando...';
}

// Requisito 01: Crie uma listagem de produtos
  // Você deve utilizar a função createProductItemElement() para criar os componentes HTML referentes a um produto.

  function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
    const section = document.createElement('section');
    section.className = 'item';

    section.appendChild(createCustomElement('span', 'item__sku', sku));
    section.appendChild(createCustomElement('span', 'item__title', name));
    section.appendChild(createProductImageElement(image));

    const adicionaAoCarrinho = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
    adicionaAoCarrinho.addEventListener('click', () => {
      createCartShopping(sku);
      // somaValores();
    });

    // Adicione o elemento retornado da função createProductItemElement(product) como filho do elemento <section class="items">.
    section.appendChild(adicionaAoCarrinho);

  return section;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

// Requisito 01: Crie uma listagem de produtos

const todosProdutos = async () => {
  const items = document.getElementsByClassName('items')[0];
  const { results } = await fetchProducts('computador');
  document.getElementsByClassName('loading')[0].remove();
  results.forEach((item) => {
    items.appendChild(createProductItemElement(item));
  });
};

function criaEscuta(ol) {
  // Requisito 04: Adiciona escuta nas lis recuperadas do localStorage para que elas sejam apagadas quando receberem click
  const arrayLis = [...ol.children];
  arrayLis.forEach((li) => {
    li.addEventListener('click', (event) => {
      cartItemClickListener(event);
      saveCartItems(ol.innerHTML);
    });
  });
}

function itensLocalStorage() {
  // Requisito 04: Carregue o carrinho de compras através do LocalStorage ao iniciar a página
  // Recupera itens do carrinho de localStorage e inserem dentro da ol 'cart__items'

  const itensSalvosCarrinho = getSavedCartItems();
  const olItensCarrinho = document.getElementsByClassName('cart__items')[0];
  olItensCarrinho.innerHTML = itensSalvosCarrinho;

  criaEscuta(olItensCarrinho);

  // Requisito 05
  somaValores();
}

// Requisito 06: Implemente a lógica no botão Esvaziar carrinho para limpar o carrinho de compras

function limparCarrinho() {
  const botaoLimpar = document.getElementsByClassName('empty-cart')[0];

  botaoLimpar.addEventListener('click', () => {
    document.getElementsByClassName('cart__items')[0].innerHTML = '';
    saveCartItems('');
    somaValores();
  });
}

window.onload = () => {
  aguardaAPI();
  todosProdutos();
  itensLocalStorage();
  limparCarrinho();
  // somaValores();
};
