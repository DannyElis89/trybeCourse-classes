console.log("Danny <3")
// 01. Acesse o elemento elementoOndeVoceEsta .
let exemplo01 = document.querySelector('#elementoOndeVoceEsta');
console.log(exemplo01);

// 02. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let exemplo02 = document.querySelector('#elementoOndeVoceEsta').parentElement.style.color = 'red';
console.log(exemplo02);

// 03. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let exemplo03 = document.querySelector('#primeiroFilhoDoFilho').innerHTML =('Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?');
console.log(exemplo03);

// 04. Acesse o primeiroFilho a partir de pai .

let exemplo04 = document.querySelector('#pai').firstChild;
console.log(exemplo04);

// 05. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .

let exemplo05 = document.querySelector('#elementoOndeVoceEsta').parentElement
console.log(exemplo05);

// 06. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let exemplo06 = document.querySelector('#elementoOndeVoceEsta').parentNode;
console.log(exemplo06);

// 07. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let exemplo07 = document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
console.log(exemplo07);

// 08. Agora acesse o terceiroFilho a partir de pai .
let exemplo08 = document.querySelector('#pai').firstElementChild.nextElementSibling.nextElementSibling;


