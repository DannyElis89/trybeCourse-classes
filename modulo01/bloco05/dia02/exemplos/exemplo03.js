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

// 5. Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .'

let eu = document.querySelector('#elementoOndeVoceEsta');
let pai = eu.parentElement;
let avo = pai.parentElement;
let tios = avo.children; //aray

for(let i = 0; i < tios.length; i += 1){
  let tio = tios[i]
  // console.log(todosOsFilhosDoPai);
  if(tio.id !== 'pai'){
    avo.removeChild(tio);
  }
}

let irmaos = pai.childNodes;


for(let i = irmaos.length - 1 ; i >= 0 ; i -= 1){
  let irmao = irmaos[i]
  // console.log(todosOsFilhosDoPai);
  if(irmao.id !== 'elementoOndeVoceEsta'){
    // irmao.remove();
    pai.removeChild(irmao);
  }
}

let filhos = eu.children;

for (let index = filhos.length - 1; index >= 0; index -=1){
  let filho = filhos[index];
  if (filho.id !== 'primeiroFilhoDoFilho'){
    eu.removeChild(filho);
  }
}

primeiroFilhoDoFilho.remove('section')
