function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
/*
Exercício 1: O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
    Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
    Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
    Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let tagDays = document.getElementById('days');

for(let index = 0; index < dezDaysList.length; index += 1){
  let diaDoMes = document.createElement('li');
  diaDoMes.innerText = dezDaysList[index];
  tagDays.appendChild(diaDoMes);

  if((index > 2 && diaDoMes.innerText == '24') || (index > 2 && diaDoMes.innerText == '31')){
    let classeDiaDoMes = document.createAttribute('class');
    classeDiaDoMes.value = 'day holiday';
    diaDoMes.setAttributeNode(classeDiaDoMes);

  } else if (diaDoMes.innerText == '4' || diaDoMes.innerText == '11' ||  diaDoMes.innerText == '18'){
    let classeDiaDoMes = document.createAttribute('class');
    classeDiaDoMes.value = 'day friday';
    diaDoMes.setAttributeNode(classeDiaDoMes);

  } else if(diaDoMes.innerText == '25'){
    let classeDiaDoMes = document.createAttribute('class');
    classeDiaDoMes.value = 'day friday holiday';
    diaDoMes.setAttributeNode(classeDiaDoMes);

  }else {
    let classeDiaDoMes = document.createAttribute('class');
    classeDiaDoMes.value = 'day';
    diaDoMes.setAttributeNode(classeDiaDoMes);
  }
}


/*
Exercício 2: Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
    Adicione a este botão a ID "btn-holiday" .
    Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function botaoFeriados (Feriados){
  let novoBotao = document.createElement('input');
  let divMae = document.getElementsByClassName('buttons-container')[0];

  novoBotao.setAttribute('type', 'button');
  novoBotao.setAttribute('value', Feriados);
  novoBotao.setAttribute('id', 'btn-holiday');

  novoBotao.style.backgroundColor = 'rgb(238,238,238)';

  divMae.appendChild(novoBotao);

}
botaoFeriados('Feriados');

/*
Exercício 3:
*/

let botao1 = document.getElementById('btn-holiday');
botao1.addEventListener('click', mudaBackgroundColor);

function mudaBackgroundColor(){
  let feriados = document.getElementsByClassName('holiday');

  for (index = 0; index < feriados.length; index += 1 ){
    let diaFeriado = feriados[index];

    if(diaFeriado.style.backgroundColor !== 'yellow'){
      diaFeriado.style.backgroundColor = 'yellow';
    } else if (diaFeriado.style.backgroundColor){
      diaFeriado.style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}

/*
Exercício 4:
*/

function botaoFridays (parametro){
  let novoBotao = document.createElement('input');
  let divMae = document.getElementsByClassName('buttons-container')[0];

  novoBotao.setAttribute('type', 'button');
  novoBotao.setAttribute('value', parametro);
  novoBotao.setAttribute('id', 'btn-friday')

  novoBotao.style.backgroundColor = 'rgb(238,238,238)';

  divMae.appendChild(novoBotao);

}

botaoFridays('Sexta-Feira');

/*
Exercício 5:
*/
let botao2 = document.getElementById('btn-friday');

botao2.addEventListener('click', mudaConteudo);


function mudaConteudo(){
  let sextasDezembro = [];
  for (let i = 5; i < dezDaysList.length; i += 7 ){
    sextasDezembro.push(dezDaysList[i]);
  }

  let sextas = document.getElementsByClassName('friday');
  let novoConteudo = 'Sexta-feira';

  for (let i = 0; i < sextas.length; i += 1){
    if (sextas[i].innerText !== novoConteudo){
      sextas[i].innerText = novoConteudo;
    } else {
      sextas[i].innerText = sextasDezembro[i];
    }
  }

}

/*
Exercício 6:
*/
let diaDoMes = document.getElementsByClassName('day');
let parametro = '';

for(let i = 0; i < diaDoMes.length; i += 1){
  parametro = diaDoMes[i].addEventListener('mouseover', zoomDia);
  parametro = diaDoMes[i].addEventListener('mouseleave', zoomDia2);
}

function zoomDia (parametro){
  // console.log(parametro.target)
  let objeto = parametro.target;
  objeto.style.transform = "scale(2)";
}

function zoomDia2 (parametro){
  // console.log(parametro.target)
  let objeto = parametro.target;
  objeto.style.transform = "scale(1)";
}

/*
Exercício 7:
*/
let divMae1 = document.getElementsByClassName('my-tasks')[0];

function adicionaTarefas (parametro){

  let novaTarefa = document.createElement('span');
  novaTarefa.innerHTML = parametro ;

  divMae1.appendChild(novaTarefa);

}

  adicionaTarefas('Projetos');


/*
Exercício 8:
*/

function corLegenda (parametroCor){

  let divTask = document.createElement('div');

  let classeDivTask = document.createAttribute('class');
  classeDivTask.value = 'task';
  divTask.setAttributeNode(classeDivTask);
  divTask.style.backgroundColor = parametroCor;

  divMae1.appendChild(divTask);

}
corLegenda('green');

/*
Exercício 9:
*/
let divTask0 = document.getElementsByClassName('task')[0];
divTask0.addEventListener('click', mudaClasseTask);

function mudaClasseTask (){

  if (!divTask0.classList.contains('selected')){
    divTask0.classList.add("selected");
  } else if (divTask0.classList.contains('selected')) {
    divTask0.classList.remove("selected");
  }
}


/*
Exercício 10:
*/

let diaDoMes1 = document.getElementsByClassName('day');

for(let i = 0; i < diaDoMes1.length; i += 1){
  diaDoMes1[i].addEventListener('click', mudaCorDia);
}


function mudaCorDia(parametroDiaClicado){
 let diaClicado = parametroDiaClicado.target;
 if(diaClicado.style.color !== divTask0.style.backgroundColor){
  diaClicado.style.color = divTask0.style.backgroundColor;
 } else {
  diaClicado.style.color = 'rgb(119,119,119)';
 }
}

/*
Exercício 11: Bônus:
*/

let novaLista = document.createElement('ul');
let divMae2 = document.getElementsByClassName('input-container')[0];
let tituloH3 = divMae2.firstElementChild;

tituloH3.appendChild(novaLista);

let botaoAdcCompromisso = document.getElementById('btn-add');
let caixaCompromisso = document.getElementById('task-input');

botaoAdcCompromisso.addEventListener('click', adcCompromisso1)

function adcCompromisso1 (){
  let conteudoCaixaDeTexto = caixaCompromisso.value
  // console.log(event)

  if(conteudoCaixaDeTexto.length == 0){
    window.alert('Erro! Digite o compromisso para então adicioná-lo á lista.');
    return
  } //else {
    let novoItemDeLista = document.createElement('li');

    novoItemDeLista.innerText = caixaCompromisso.value;
    caixaCompromisso.value = '';
    divMae2.appendChild(novoItemDeLista);
  //}
}

caixaCompromisso.addEventListener('keyup', function(event) {
  let conteudoCaixaDeTexto = caixaCompromisso.value
  if(conteudoCaixaDeTexto.length == 0){
    window.alert('Erro! Digite o compromisso para então adicioná-lo á lista.');
    return
  }
  if (event.key === 'Enter'){
    let novoItemDeLista = document.createElement('li');

    novoItemDeLista.innerText = caixaCompromisso.value;
    caixaCompromisso.value = '';
    divMae2.appendChild(novoItemDeLista);
  }
})
