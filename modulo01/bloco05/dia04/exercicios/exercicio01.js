//cria botão cor da fonte
let divCorDaFonte = document.getElementById('corDaFonte');

let cores = ['Branco', 'Preto', 'Rosa', 'Amarelo', 'Violeta', 'Laranja', 'Azul', 'Cinza', 'Vermelho', 'Marrom'];

let cores1 = ['white', 'black', 'rgb(243, 14, 52)', 'yellow', 'violet', 'orange', 'blue', 'gray', 'red', 'brown'];

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
  let target = parametroCorFonte.target;
  let valorTarget = target.value;
  let cor = target.getAttribute('cor');

  document.body.style.color = cor;
  localStorage.setItem("fontColor", cor );

}




let divCorDoPlanoDeFundo = document.getElementById('corDoPlanoDeFundo');

for(let i = 0; i < cores.length; i += 1){
  let botaoCorPlanoDeFundo = document.createElement('button');
  let nomeDaCor = cores[i]
  botaoCorPlanoDeFundo.innerText = nomeDaCor;
  botaoCorPlanoDeFundo.setAttribute('value', nomeDaCor);
  botaoCorPlanoDeFundo.setAttribute('label', nomeDaCor);
  botaoCorPlanoDeFundo.setAttribute('class', 'classeBotaoCorPlanoDeFundo');

  divCorDoPlanoDeFundo.appendChild(botaoCorPlanoDeFundo);

}

let tamanho = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4];

let divTamanhoDaFonte = document.getElementById('tamanhoDaFonte');

for(let i = 0; i < tamanho.length; i += 1){
  let botaoTamanhoDaFonte = document.createElement('button');
  let tamanhoDaFonte = tamanho[i];
  botaoTamanhoDaFonte.innerText = tamanhoDaFonte;
  botaoTamanhoDaFonte.setAttribute('value', tamanhoDaFonte);
  botaoTamanhoDaFonte.setAttribute('label', tamanhoDaFonte);
  botaoTamanhoDaFonte.setAttribute('class', 'classeBotaoTamanhoDaFonte');

  divTamanhoDaFonte.appendChild(botaoTamanhoDaFonte);
}

let divEspacoLinhas = document.getElementById('espacoLinhas');

for(let i = 0; i < tamanho.length; i += 1){
  let botaoEspacoLinhas = document.createElement('button');
  let espacoLinhas = tamanho[i];
  botaoEspacoLinhas.innerText = espacoLinhas;
  botaoEspacoLinhas.setAttribute('value', espacoLinhas);
  botaoEspacoLinhas.setAttribute('label', espacoLinhas);
  botaoEspacoLinhas.setAttribute('class', 'classeBotaoEspacoLinhas');

  divEspacoLinhas.appendChild(botaoEspacoLinhas);
}


let fontes = ['Roboto', 'Indie Flower', 'Lobster', 'Shizuru', 'Lato', 'Montserrtat', 'Poppins', 'Oswald', 'Oooh Baby', 'Merriweather'];
let divEstilosFontes = document.getElementById('tipoDeFonte');

for(let i = 0; i < fontes.length; i += 1){
  let botaoEstilosFontes = document.createElement('button');
  let estilosFontes = fontes[i];
  botaoEstilosFontes.innerText = estilosFontes;
  botaoEstilosFontes.setAttribute('value', estilosFontes);
  botaoEstilosFontes.setAttribute('label', estilosFontes);
  botaoEstilosFontes.setAttribute('class', 'classeBotaoEstilosFontes');

  divEstilosFontes.appendChild(botaoEstilosFontes);
}

