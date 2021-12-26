/*
Requisito obrigatório 1 - Crie uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida.
*/

const caixaDeTexto = document.getElementById('text-input');
// const containerImagem = document.getElementById('meme-image-container');
const textoDoMeme = document.getElementById('meme-text');
// const localImagem = document.getElementById('meme-image');

function insereTexto() {
  textoDoMeme.innerText = caixaDeTexto.value;
}

caixaDeTexto.addEventListener('keyup', insereTexto);

/*
Requisito obrigatório 2 - O site deve permitir que quem usa faça upload de uma imagem de seu computador.

*/
const botaoUpload = document.getElementById('meme-insert');

/*
fonte: função uploadImagem adaptada de
https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader/readAsDataURL
*/

function uploadImagem() {
  const imagemTag = document.getElementById('meme-image');
  const dadosImagemAdd = document.getElementById('meme-insert').files[0];
  const reader = new FileReader();

  reader.onloadend = function () {
    imagemTag.src = reader.result;
  };

  if (dadosImagemAdd) {
    reader.readAsDataURL(dadosImagemAdd);
  } else {
    imagemTag.src = '';
  }
}

botaoUpload.addEventListener('click', uploadImagem);

/*
Requisito obrigatório 3 - Adicione uma moldura no container. A moldura deve ter 1 pixel de largura, deve ser preta e do tipo 'solid'. A área onde a imagem aparecerá deve ter fundo branco. - VIA CSS
Requisito obrigatório 4 - Adicione o texto que será inserido sobre a imagem deve ter uma cor, sombra e tamanho específicos.
Requisito obrigatório 5 - Limite o tamanho do texto que o usuário pode inserir. VIA HTML
Requisito bônus 6 - Permita a quem usa customizar o meme escolhido acrescentando a ele uma de três bordas. A página deve ter três botões, que ao serem clicados devem cada um trocar a própria borda ao redor do container.
*/

function customizaBorda(parametroBotaoClicado) {
  const botaoClicado = parametroBotaoClicado.target;
  const divImagem = document.getElementById('meme-image-container');

  divImagem.style.border = '';

  if (botaoClicado.id === 'fire') {
    divImagem.style.border = '3px dashed red';
  } else if (botaoClicado.id === 'water') {
    divImagem.style.border = '5px double blue';
  } else if (botaoClicado.id === 'earth') {
    divImagem.style.border = '6px groove green';
  } else {
    divImagem.style.border = '1px solid black';
  }
}

const botaoMoldura = document.getElementsByClassName('botaoMoldura');
const botaoFire = document.getElementById('fire');
botaoFire.style.backgroundColor = 'red';

const botaoWater = document.getElementById('water');
botaoWater.style.backgroundColor = 'blue';

const botaoEarth = document.getElementById('earth');
botaoEarth.style.backgroundColor = 'green';

for (let i = 0; i < botaoMoldura.length; i += 1) {
  const cadaBotao = botaoMoldura[i];
  cadaBotao.addEventListener('click', customizaBorda);
}

/*
Requisito bônus 7 - Tenha um conjunto de quatro imagens pré prontas de memes famosos para o usuário escolher. Mostre miniaturas das imagens e, mediante clique do usuário, essa imagem deve aparecer dentro da moldura do elemento de container.
*/
const sugestoesDeImagens = document.getElementsByClassName('imagesSugestao');

function selecionaImagemSugestao(imagemClicada) {
  const imagemSelecionada = imagemClicada.target;
  const imagemTag = document.getElementById('meme-image');
  imagemTag.src = imagemSelecionada.src;
}

for (let i = 0; i < sugestoesDeImagens.length; i += 1) {
  const cadaSugestaoImagem = sugestoesDeImagens[i];
  cadaSugestaoImagem.addEventListener('click', selecionaImagemSugestao);
}
