/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
  - document.getElementById()
  - document.getElementsByClassName()
  - document.getElementsByTagName()
*/

/*1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício) */

let paragrafos = document.getElementsByTagName('p');
for(let index = 0; index < paragrafos.length; index += 1){
  paragrafos[index].innerText = "Casa propria quitada, viajar conhecendo o mundo.";
};


/*  2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).*/

let quadradoAmarelo = document.getElementsByClassName("main-content");

for (let indice = 0; indice < quadradoAmarelo.length; indice += 1){
  console.log(quadradoAmarelo[indice]);
  quadradoAmarelo[indice].style.backgroundColor = 'rgb(76,164,109)';
};

/*  3. Crie uma função que mude a cor do quadrado vermelho para branco.*/
let quadradoVermelho = document.getElementsByClassName('center-content');

for (let i = 0; i < quadradoVermelho.length; i += 1){
  quadradoVermelho[i].style.backgroundColor = 'white';
};


/*  4. Crie uma função que corrija o texto da tag <h1>.*/
document.getElementsByTagName('h1')[0].innerText = "Exercício 5.1 - JavaEscripit";


/*  5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.*/

for(let index = 0; index < paragrafos.length; index += 1){
  paragrafos[index].style.textTransform = "uppercase"; //referência: https://www.w3schools.com/jsref/prop_style_texttransform.asp
};

/*  6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.*/

for(let index = 0; index < paragrafos.length; index += 1){
  console.log(paragrafos[index]);
};
