// 01 - Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.

console.log('Exemplo 01 ' + document.getElementById('page-title').innerHTML);

document.getElementById('page-title').innerText = 'Exemplo 01 ' + 'Filme favorito: as branquelas';

console.log('Exemplo 01 ' + document.getElementById('page-title').innerText);

// 02 - Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.

console.log('Exemplo 02 ' + document.getElementById('second-paragraph').innerHTML);

document.getElementById('second-paragraph').innerText = 'Exemplo 02 ' + 'Já assisti diversas vezes!';

console.log('Exemplo 02 ' + document.getElementById('second-paragraph').innerText);

// 03 - Por fim, recupere o subtítulo e altere-o também.

console.log('Exemplo 03 ' +document.getElementById('subtitle').innerHTML);

document.getElementById('subtitle').innerText = 'Exemplo 03 ' + 'Dublado ou legendado, é bom de qualquer jeito!';

console.log('Exemplo 03 ' + document.getElementById('subtitle').innerText);

// 04 - Adicione uma classe igual para os dois parágrafos.
// 05. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;

console.log('Exemplo 05 ' + document.getElementsByClassName('paragrafos'));

// 6. Altere algum estilo do primeiro deles.

document.getElementsByClassName('paragrafos')[0].innerText = 'Alterando a cor e tamanho da fonte + cor do parágrafo!';

document.getElementsByClassName('paragrafos')[0].style.backgroundColor = "red";

document.getElementsByClassName('paragrafos')[0].style.color = "white";

document.getElementsByClassName('paragrafos')[0].style.fontSize = '50px';

// 7. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName .

document.getElementsByTagName('h4')[0].style.backgroundColor = 'yellow';

document.getElementsByTagName('h4')[0].style.fontSize = '40px';

document.getElementsByTagName('h4')[0].innerText += ' + Alterando cor do fundo e tamanh da fonte da tag <h4>.';
