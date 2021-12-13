// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM'
let body = document.getElementsByTagName('body');

document.body.appendChild(h1);

// 2. Adicione a tag main com a classe main-content como filho da tag body ;

let main = document.createElement('main');
document.body.appendChild(main);

let classeMain = document.createAttribute("class");
classeMain.value = 'main-content';
main.setAttributeNode(classeMain);

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let sectionCenterContent = document.createElement('section');

let classeCenterContent = document.createAttribute('class');
classeCenterContent.value = 'center-content';
sectionCenterContent.setAttributeNode(classeCenterContent);

main.appendChild(sectionCenterContent);



// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let p1 = document.createElement('p');
p1.innerText = 'Texto do parágrafo filho do section e neto da main.'

sectionCenterContent.appendChild(p1);


// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let sectionLeftContent = document.createElement('section');
let classeLeftContent = document.createAttribute('class');
classeLeftContent.value = 'left-content';
sectionLeftContent.setAttributeNode(classeLeftContent);

main.appendChild(sectionLeftContent);



// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let sectionRightContent = document.createElement('section');

let classeRightContent = document.createAttribute('class');
classeRightContent.value = 'right-content';
sectionRightContent.setAttributeNode(classeRightContent);

main.appendChild(sectionRightContent);



// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let imagem1 = document.createElement('img');

let classeImagem1 = document.createAttribute('class');
classeImagem1.value = 'small-image';
imagem1.setAttributeNode(classeImagem1);

srcImagem1 = document.createAttribute('src');
srcImagem1.value = 'https://picsum.photos/200';
imagem1.setAttributeNode(srcImagem1);

sectionLeftContent.appendChild(imagem1);


// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let listaNaoOrdenada1 = document.createElement('ul');
sectionRightContent.appendChild(listaNaoOrdenada1);

let numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for(let i = 0; i < numbers.length; i += 1){
  let conteudo = numbers[i];
  let itemDaLista = document.createElement('li');

  itemDaLista.innerText = numbers[i];

  listaNaoOrdenada1.appendChild(itemDaLista);
}


// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

let h31 = document.createElement('h3');
let h32 = document.createElement('h3');
let h33 = document.createElement('h3');

main.appendChild(h31);
main.appendChild(h32);
main.appendChild(h33);


// 10. Adicione a classe title na tag h1 criada;

let h1Classe = document.createAttribute('class');

h1Classe.value = 'title';
h1.setAttributeNode(h1Classe);


// 11. Adicione a classe description nas 3 tags h3 criadas;
let h31Classe = document.createAttribute('class');
let h32Classe = document.createAttribute('class');
let h33Classe = document.createAttribute('class');

h31Classe.value = 'description';
h32Classe.value = 'description';
h33Classe.value = 'description';

h31.setAttributeNode(h31Classe);
h32.setAttributeNode(h32Classe);
h33.setAttributeNode(h33Classe);


// 12. Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

main.removeChild(sectionLeftContent);

// 13. Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

sectionRightContent.style.marginRight = 'auto';

// 14. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

sectionCenterContent.style.backgroundColor = 'green';

// 15. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

let itensLista = listaNaoOrdenada1.children;

for(let i = (itensLista.length - 1); i > 0 ; i -= 1){
  let item = itensLista[i];
  console.log(item);
  if(i > 7){
    let ultimoFilho = listaNaoOrdenada1.lastElementChild;
    ultimoFilho.remove();
  }
}
