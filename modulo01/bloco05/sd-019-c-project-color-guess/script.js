// Requisito obrigatório 1 - Adicione no seu site um título com o nome do seu jogo;
// Requisito obrigatório 2 - Adicione um texto com o código RGB a ser adivinhado
function geraNumero(min, max) {
  const range = (max + 1) - min;
  let novoNum = 0;
  do {
    novoNum = Math.floor(Math.random() * range + min);
  } while (novoNum > max);
  return novoNum;
}

function geraCor() {
  const r = geraNumero(0, 255);
  const g = geraNumero(0, 255);
  const b = geraNumero(0, 255);
  const novaCor = `(${r}, ${g}, ${b})`;
  return novaCor;
}

const areaTexto = document.getElementById('rgb-color');

function sortearCor() {
  areaTexto.innerText = `rgb${geraCor()}`;
}

sortearCor();

// Requisito obrigatório 3 - Adicione à página opções de cores para serem adivinhadas
const novaSection = document.createElement('section');
novaSection.setAttribute('id', 'sectionDivsColors');

const documentBody = document.getElementsByTagName('body')[0];
documentBody.appendChild(novaSection);

// Requisito obrigatório 5 - Clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto
const novoParagrafo = document.createElement('p');
novoParagrafo.setAttribute('id', 'answer');

function resposta() {
  novaSection.appendChild(novoParagrafo);
  novoParagrafo.innerText = 'Escolha uma cor';
}

let pontos = 0;

function matchColor(divParametro) {
  // Remove as escutas após clicar
  const bolinhaPelaClasse = document.getElementsByClassName('ball');
  for (let i = 0; i < bolinhaPelaClasse.length; i += 1) {
    bolinhaPelaClasse[i].removeEventListener('click', matchColor);
  }

  const divClicada = divParametro.target;
  if (divClicada.style.backgroundColor === areaTexto.innerText) {
    pontos += 3;
    const placar = document.getElementById('score');
    placar.innerText = `${pontos}`;
    novoParagrafo.innerText = 'Acertou!';
  } else {
    novoParagrafo.innerText = 'Errou! Tente novamente!';
  }
}

// Requisito obrigatório 4 - Adicione cores nas bolas, elas devem ser geradas dinâmicamente
function gerarOpcoes() {
  novaSection.innerHTML = '';
  resposta();
  const opcaoCorreta = geraNumero(0, 5);

  for (let i = 0; i < 6; i += 1) {
    const novaDiv = document.createElement('div');
    novaDiv.setAttribute('class', 'ball');
    if (i === opcaoCorreta) {
      novaDiv.setAttribute('style', `background-color: ${areaTexto.innerText};`);
    } else {
      novaDiv.setAttribute('style', `background-color: rgb${geraCor()};`);
    }
    novaDiv.addEventListener('click', matchColor);
    novaSection.appendChild(novaDiv);
  }
}

gerarOpcoes();

// Requisito bônus 7 - Crie um placar que incremente 3 pontos para cada acerto no jogo

function criaPlacar() {
  const placar = document.createElement('p');
  placar.setAttribute('id', 'score');
  placar.innerText = `${pontos}`;
  // localStorage.setItem('placar', `${pontos}`);
  novaSection.appendChild(placar);
}

criaPlacar();

// Requisito obrigatório 6 - Crie um botão para iniciar/reiniciar o jogo

function reiniciaJogo() {
  // window.location.reload();
  // localStorage.getItem('placar', `${pontos}`);
  sortearCor();
  resposta();
  gerarOpcoes();
  criaPlacar();
}

const botaoRestart = document.getElementById('reset-game');
botaoRestart.addEventListener('click', reiniciaJogo);

// Requisito obrigatório 5 - Clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto
