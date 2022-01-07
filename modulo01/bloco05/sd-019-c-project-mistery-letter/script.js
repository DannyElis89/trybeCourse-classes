/*
Requisito obrigatório 6 - Crie a classe newspaper
Requisito obrigatório 7 - Crie a classe magazine1.
Requisito obrigatório 8 - Crie a classe magazine2.
Requisito obrigatório 9 - Crie a classe medium.
Requisito obrigatório 10 - Crie a classe big.
Requisito obrigatório 11 - Crie a classe reallybig.
Requisito obrigatório 12 - Crie a classe rotateleft.
Requisito obrigatório 13 - Crie a classe rotateright.
Requisito obrigatório 14 - Crie a classe skewleft.
Requisito obrigatório 15 - Crie a classe skewright.
*/

const botaoCriaCarta = document.getElementById('criar-carta');
const inputTextoCarta = document.getElementById('carta-texto');
const paragrafoCarta = document.getElementById('carta-gerada');

const classesFrasesEstilo = ['newspaper', 'magazine1', 'magazine2'];
const classesFrasesTamanho = ['medium', 'big', 'reallybig'];
const classesFrasesRotacao = ['rotateleft', 'rotateright'];
const classesFrasesInclinacao = ['skewleft', 'skewright'];

/*
Requisito obrigatório 1 - Deve haver um input com o id="carta-texto" onde a pessoa usuária poderá digitar o conteúdo da carta - VIA HTML
Requisito obrigatório 2 - Deve haver um parágrafo com o id="carta-gerada" onde a pessoa usuária verá o resultado de sua carta misteriosa - VIA HTML
Requisito obrigatório 3 - Deve haver um botão com id="criar-carta" e ao clicar nesse botão, a carta misteriosa deve ser gerada
Requisito obrigatório 4 - Ao criar uma carta através do botão com id="criar-carta", o input com id="carta-texto" deve permanecer com o texto digitado
Requisito obrigatório 5 - Se a pessoa usuária não preencher o campo ou preencher com apenas espaços vazios adicionar a mensagem 'Por favor, digite o conteúdo da carta.'
*/
function geraNumero(min, max) {
  const range = (max + 1) - min;
  let novoNum = 0;
  do {
    novoNum = Math.floor(Math.random() * range + min);
  } while (novoNum > max);
  return novoNum;
}

function alteraEstilo(parametroSpanclicado) {
  const spanclicado = parametroSpanclicado.target;

  spanclicado.setAttribute('class', '');

  spanclicado.classList.add(classesFrasesEstilo[geraNumero(0, 2)]);
  spanclicado.classList.add(classesFrasesTamanho[geraNumero(0, 2)]);
  spanclicado.classList.add(classesFrasesRotacao[geraNumero(0, 1)]);
  spanclicado.classList.add(classesFrasesInclinacao[geraNumero(0, 1)]);
}

function testaInput(frase) {
  const fraseTrim = frase.trim();
  if (frase.length === 0 || fraseTrim.length === 0) {
    paragrafoCarta.innerText = 'Por favor, digite o conteúdo da carta.';
    paragrafoCarta.style.fontFamily = 'Twinkle Star, cursive';
    return false;
  }
}

function geraSpan(frase) {
  const espaco = ' ';
  const arrayPalavras = frase.split(espaco, frase.length - 1);

  for (let i = 0; i < arrayPalavras.length; i += 1) {
    const cadaPalavra = arrayPalavras[i];
    const novoSpan = document.createElement('span');
    novoSpan.innerText = cadaPalavra;
    paragrafoCarta.appendChild(novoSpan);
    novoSpan.addEventListener('click', alteraEstilo);
  }
  return paragrafoCarta.children;
}

function adicionaClasse() {
  const tagsSpan = document.getElementsByTagName('span');

  for (let i = 0; i < tagsSpan.length; i += 1) {
    const cadaTagSpan = tagsSpan[i];

    cadaTagSpan.classList.add(classesFrasesEstilo[geraNumero(0, 2)]);
    cadaTagSpan.classList.add(classesFrasesTamanho[geraNumero(0, 2)]);
    cadaTagSpan.classList.add(classesFrasesRotacao[geraNumero(0, 1)]);
    cadaTagSpan.classList.add(classesFrasesInclinacao[geraNumero(0, 1)]);
  }
}

function geraCarta() {
  const frase = inputTextoCarta.value;
  paragrafoCarta.innerHTML = '';

  if (testaInput(frase) === false) {
    return;
  }
  geraSpan(frase);
  adicionaClasse();
}

botaoCriaCarta.addEventListener('click', geraCarta);
inputTextoCarta.addEventListener('keyup', (parametroTeclaEnter) => {
  if (parametroTeclaEnter.key === 'Enter') {
    geraCarta();
  }
});

// Requisito bônus 18 - Deve haver um parágrafo com o id="carta-contador" onde existirá um contador de palavras

const paragrafoContador = document.getElementById('carta-contador');

function contagemPalavras() {
  paragrafoContador.innerText = parseInt(document.getElementsByTagName('span').length, 10);
}

paragrafoContador.innerText = parseInt(document.getElementsByTagName('span').length, 10);

botaoCriaCarta.addEventListener('click', contagemPalavras);
inputTextoCarta.addEventListener('keyup', (parametroTeclaEnter) => {
  if (parametroTeclaEnter.key === 'Enter') {
    contagemPalavras();
  }
});
