// 1. Crie um irmão para elementoOndeVoceEsta .

let elementoOndeEuTo = document.querySelector('#elementoOndeVoceEsta');

let meuPai = elementoOndeEuTo.parentNode;
let meuIrmao = document.createElement('section');

meuIrmao.innerText = 'Meu irmão, filho do meu pai.';

meuPai.appendChild(meuIrmao);


// 2. Crie um filho para elementoOndeVoceEsta .

let meuFilho = document.createElement('section');
meuFilho.innerText = 'Section, meu filho!';

elementoOndeEuTo.appendChild(meuFilho);


// 3. Crie um filho para primeiroFilhoDoFilho .

let primeiroNeto = document.querySelector('#primeiroFilhoDoFilho');
let primeiroBisneto = document.createElement('section');
primeiroBisneto.innerText = 'Primeiro bisneto!!!';

primeiroNeto.appendChild(primeiroBisneto);


// 4. A partir desse filho criado, acesse terceiroFilho .

let meuBisavo = primeiroBisneto.parentNode.parentNode.parentNode;
let acessandoTerceiroFilho = primeiroBisneto.parentElement.parentElement.nextElementSibling;
acessandoTerceiroFilho.innerText = 'Acessando o Elemento Terceiro filho.'
