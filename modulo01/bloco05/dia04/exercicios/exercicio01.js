let cores = ['Branco', 'Preto', 'Rosa', 'Amarelo', 'Violeta', 'Laranja', 'Azul', 'Cinza', 'Vermelho', 'Marrom'];

let cores1 = ['white', 'black', 'rgb(243, 14, 52)', 'yellow', 'violet', 'orange', 'blue', 'gray', 'red', 'brown'];


//cria botão cor da fonte

let divCorDaFonte = document.getElementById('corDaFonte');

for(let i = 0; i < cores.length; i += 1){
  let botaoCorFonte = document.createElement('button');
  let nomeDaCor = cores[i]
  botaoCorFonte.innerText = nomeDaCor;
  botaoCorFonte.setAttribute('cor', cores1[i]);
  botaoCorFonte.setAttribute('class', 'classeBotaoCorDaFonte')

  divCorDaFonte.appendChild(botaoCorFonte);

}


//cria evento e função que mudam a cor da fonte

let botoesCorDaFonte = document.getElementsByClassName('classeBotaoCorDaFonte');

for(let i = 0; i < botoesCorDaFonte.length; i += 1){
  let escutaBotao = botoesCorDaFonte[i];
  escutaBotao.addEventListener('click', mudaCorDaFonte)
}

function mudaCorDaFonte (parametroCorFonte){
  let targetCorDaFonte = parametroCorFonte.target;
  let cor = targetCorDaFonte.getAttribute('cor');

  document.body.style.color = cor;
  localStorage.setItem("fontColor", cor );

}


//cria botão que muda a cor do plano de fundo

let divCorDoPlanoDeFundo = document.getElementById('corDoPlanoDeFundo');

for(let i = 0; i < cores.length; i += 1){
  let botaoCorPlanoDeFundo = document.createElement('button');
  let nomeDaCor = cores[i]
  botaoCorPlanoDeFundo.innerText = nomeDaCor;
  botaoCorPlanoDeFundo.setAttribute('cor', cores1[i]);
  botaoCorPlanoDeFundo.setAttribute('class', 'classeBotaoCorPlanoDeFundo');

  divCorDoPlanoDeFundo.appendChild(botaoCorPlanoDeFundo);

}

//cria evento e função que mudam a cor do plano de fundo

let botoesCorPlanoDeFundo = document.getElementsByClassName('classeBotaoCorPlanoDeFundo');


for(let i = 0; i < botoesCorPlanoDeFundo.length; i += 1){
  let escutaBotao = botoesCorPlanoDeFundo[i];
  escutaBotao.addEventListener('click', mudaCorDoFundo)
}

function mudaCorDoFundo (parametroCorFundo){
  let targetCorDeFundo = parametroCorFundo.target;
  let cor = targetCorDeFundo.getAttribute('cor');

  document.body.style.backgroundColor = cor;
  localStorage.setItem("backgroundColor", cor );
}


//cria botão que muda o tamanho da fonte


let tamanho = ['0.5em', '1em', '1.5em', '2em', '2.5em', '3em', '3.5em', '4em'];
let labeltamanho = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4];

let divTamanhoDaFonte = document.getElementById('tamanhoDaFonte');

for(let i = 0; i < tamanho.length; i += 1){
  let botaoTamanhoDaFonte = document.createElement('button');
  botaoTamanhoDaFonte.innerText = labeltamanho[i];
  botaoTamanhoDaFonte.setAttribute('tamanho', tamanho[i]);
  botaoTamanhoDaFonte.setAttribute('class', 'classeBotaoTamanhoDaFonte');

  divTamanhoDaFonte.appendChild(botaoTamanhoDaFonte);
}

//cria evento e função que mudam o tamanho da fonte

let botoesTamanhoDaFonte = document.getElementsByClassName('classeBotaoTamanhoDaFonte');

for(let i = 0; i < tamanho.length; i += 1){
  let escutaBotao = botoesTamanhoDaFonte[i];
  escutaBotao.addEventListener('click', mudaTamanhoFonte)
}

function mudaTamanhoFonte (parametroTamanhoFonte){
  let targetTamanhoFonte = parametroTamanhoFonte.target;
  let tamanhoFonte = targetTamanhoFonte.getAttribute('tamanho');

  document.body.style.fontSize = tamanhoFonte;
  localStorage.setItem("fontSize", tamanhoFonte);
}


//cria botão que muda o espaçamento entre as linhas

let divEspacoLinhas = document.getElementById('espacoLinhas');

for(let i = 0; i < tamanho.length; i += 1){
  let botaoEspacoLinhas = document.createElement('button');
  botaoEspacoLinhas.innerText = labeltamanho[i];
  botaoEspacoLinhas.setAttribute('line-height', labeltamanho[i]);
  botaoEspacoLinhas.setAttribute('class', 'classeBotaoEspacoLinhas');

  divEspacoLinhas.appendChild(botaoEspacoLinhas);
}


//cria evento e função que mudam o espaçamento entre as linhas

let botoesEspacamento = document.getElementsByClassName('classeBotaoEspacoLinhas');

for(let i = 0; i < tamanho.length; i += 1){
  let escutaBotao = botoesEspacamento[i];
  escutaBotao.addEventListener('click', mudaEspacamento)
}

function mudaEspacamento(parametroEspacamento){
  let targetEspacamento = parametroEspacamento.target;
  let tamanhoEspacamento = targetEspacamento.getAttribute('line-height');

  document.body.style.lineHeight = tamanhoEspacamento;
  localStorage.setItem('line-height', tamanhoEspacamento);
}


//cria botão para mudar o estilo da fonte


let fontes = ['Indie Flower', 'Lobster', 'Shizuru', 'Lato', 'Poppins', 'Oswald', 'Oooh Baby', 'Open Sans', 'Twinkle Star', 'Merriweather'];

let fontFamilies = ["'Indie Flower', cursive","'Lobster Two', cursive", "'Shizuru', cursive", "'Lato', sans-serif", "'Poppins', sans-serif", "'Oswald', sans-serif", "'Oooh Baby', cursive", "'Open Sans', sans-serif", "'Twinkle Star', cursive", "'Merriweather', serif",]

let divEstilosFontes = document.getElementById('tipoDeFonte');

for(let i = 0; i < fontes.length; i += 1){
  let botaoEstilosFontes = document.createElement('button');
  let estilosFontes = fontes[i];
  botaoEstilosFontes.innerText = estilosFontes;
  botaoEstilosFontes.setAttribute('font-family', fontFamilies[i]);
  botaoEstilosFontes.setAttribute('class', 'classeBotaoEstilosFontes');

  divEstilosFontes.appendChild(botaoEstilosFontes);
}

//cria evento e escuta que mudam o estilo da fonte

let botoesFontes = document.getElementsByClassName('classeBotaoEstilosFontes');

for(let i = 0; i < fontes.length; i += 1){
  let escutaBotao = botoesFontes[i];
  escutaBotao.addEventListener('click', mudaFontFamily)
}

function mudaFontFamily(parametroFontFamily){
  let targetFontFamily = parametroFontFamily.target;
  let fontFamily = targetFontFamily.getAttribute('font-family');

  document.body.style.fontFamily = fontFamily;
  localStorage.setItem("font-family", fontFamily);
}



