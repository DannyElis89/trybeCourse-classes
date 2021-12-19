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
    classeDiaDoMes.value = 'friday';
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
    feriados[index].style.backgroundColor = "yellow";
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


/*
Exercício 7:
*/


/*
Exercício 8:
*/



/*
Exercício 9:
*/



/*
Exercício 10:
*/



/*
Exercício 11: Bônus:
*/
