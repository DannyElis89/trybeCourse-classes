// Requisito obrigatório 1 - Adicione à página o título "Paleta de Cores".
// Requisito obrigatório 2 - Adicione à página uma paleta contendo quatro cores distintas.

// Requisito obrigatório 3 - Adicione a cor preta como a primeira cor da paleta de cores.
// Requisito obrigatório 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels

const paletaDeCores = document.getElementById('color-palette');

const colorsList = ['black', 'crimson', 'indigo', 'yellow'];

// Requisito obrigatório 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.

function selecionaCor(corSelecionada) {
  const coresPaleta = document.getElementsByClassName('color');
  for (let i = 0; i < coresPaleta.length; i += 1) {
    const novaCor = coresPaleta[i];
    novaCor.setAttribute('class', 'color');
  }
  const divSelecionada = corSelecionada.target;
  divSelecionada.setAttribute('class', 'color selected');
}

function geraPaleta(colorsL) {
  for (let i = 0; i < 4; i += 1) {
    const novaCor = document.createElement('div');

    novaCor.setAttribute('id', colorsL[i]);
    novaCor.style.backgroundColor = colorsL[i];

    if (novaCor.id === 'black') {
      novaCor.setAttribute('class', 'color selected');
    } else {
      novaCor.setAttribute('class', 'color');
    }
    paletaDeCores.appendChild(novaCor);

    novaCor.addEventListener('click', selecionaCor);
  }
}

// Requisito obrigatório 4 - Adicione à página um quadro de pixels, com 25 pixels.
// Requisito obrigatório 5 - Faça com que cada elemento do quadro de pixels possua 40 pixels de largura, 40 pixels de altura e seja delimitado por uma borda preta de 1 pixel.
// Requisito obrigatório 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

const quadro = document.getElementById('pixel-board');
quadro.innerText = '';

function mudaCor(pixelClicado) {
  const divCorSelecionada = document.getElementsByClassName('selected')[0];
  const corSelecionada = divCorSelecionada.getAttribute('id');
  const pixelSelecionado = pixelClicado.target;
  pixelSelecionado.style.backgroundColor = corSelecionada;
}

function tamanhoQuadrado(novoPixel, parametroTamanho) {
  const medida = (200 / parametroTamanho);
  const novoPixel1 = novoPixel;
  novoPixel1.style.width = `${medida}px`;
  novoPixel1.style.height = `${medida}px`;

  const medidaQuadro = (medida * parametroTamanho + parametroTamanho * 2);
  quadro.style.width = `${medidaQuadro}px`;
  quadro.style.height = `${medidaQuadro}px`;
}

function criaQuadro(parametroTamanho) {
  if (parametroTamanho < 5 || parametroTamanho > 51) {
    return;
  }

  for (let i = 0; i < parametroTamanho ** 2; i += 1) {
    const novoPixel = document.createElement('div');

    novoPixel.setAttribute('class', 'pixel');
    novoPixel.setAttribute('id', `pixel ${i}`);
    quadro.appendChild(novoPixel);

    tamanhoQuadrado(novoPixel, parametroTamanho);
    novoPixel.addEventListener('click', mudaCor);
  }
}
criaQuadro(5);

// Requisito obrigatório 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

function limpaQuadro() {
  const pixels = document.getElementsByClassName('pixel');

  for (let i = 0; i < pixels.length; i += 1) {
    const cadaQuadrado = pixels[i];
    cadaQuadrado.style.backgroundColor = 'white';
  }
}

const botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', limpaQuadro);

// Requisito bônus 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
// Requisito bônus 11 - Limite o tamanho mínimo e máximo do board.

const inputTamanhoQuadro = document.getElementById('board-size');

function mudaTamanho() {
  const valorInserido = parseInt(inputTamanhoQuadro.value, 10);

  if (inputTamanhoQuadro.value === '') {
    window.alert('Board inválido!');
    return;
  }

  if (quadro.children.length > 0) {
    quadro.innerHTML = '';
  }

  if (valorInserido < 5) {
    criaQuadro(5);
  } else if (valorInserido > 50) {
    criaQuadro(50);
  } else {
    criaQuadro(parseInt(valorInserido, 10));
  }
}

inputTamanhoQuadro.addEventListener('keyup', (parametroTeclaEnter) => {
  if (parametroTeclaEnter.key === 'Enter') {
    mudaTamanho();
  }
});

const botaoTamanhoQuadro = document.getElementById('generate-board');
botaoTamanhoQuadro.addEventListener('click', mudaTamanho);

// Requisito bônus 12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.

function geraNumero(min, max) {
  const range = (max + 1) - min;
  let novoNum = 0;
  do {
    novoNum = Math.floor(Math.random() * range + min);
  } while (novoNum > max);
  return novoNum;
}

function geraCor() {
  let r = 0;
  let g = 0;
  let b = 0;

  let novaCor;
  do {
    r = geraNumero(0, 255);
    g = geraNumero(0, 255);
    b = geraNumero(0, 255);
    novaCor = `rgba(${r}, ${g}, ${b}, 1)`;
  // } while ((r === 0 && g === 0 && b === 0) || (r === 255 && g === 255 && b === 255));
  } while (novaCor === 'rgba(0, 0, 0)' || novaCor === 'rgba(255, 255, 255)');

  return novaCor;
}

function novaPaletaCores() {
  colorsList.splice(1, 3);

  do {
    for (let i = 1; i < 4; i += 1) {
      const novaCor = geraCor();
      colorsList.push(novaCor);
    }
  } while (
    (colorsList[1] === colorsList[2])
    || (colorsList[1] === colorsList[3])
    || (colorsList[3] === colorsList[2])
  );

  geraPaleta(colorsList);
}

novaPaletaCores();
