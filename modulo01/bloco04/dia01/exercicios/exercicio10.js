// 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

function lucroProduto(a, b){
  let lucro = (((a - b)/b) * 100);
  return lucro;
}

const preco = 100;
const custo = 50;

console.log(lucroProduto(preco, custo) + '%');
