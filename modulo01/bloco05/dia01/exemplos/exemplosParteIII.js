// Para praticar, substitua todas as funções que você usou no exercício anterior (arquivo exemplosParteII.js) por querySelector e/ou querySelectorAll .

// 01 - Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.

document.querySelector('#page-title').innerHTML = 'Exemplo 01 - Alterando o título para: ' + 'Filme favorito: The lion King, de 2019';

// 02 - Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.

document.querySelectorAll('p')[1].innerText = 'Gosto também do álbum dessa releitura: "The Lion King: The Gift".';

// 03 - Por fim, recupere o subtítulo e altere-o também.

document.querySelectorAll('h4')[0].innerText = 'Uma releitura sensível e profunda do clássico "O Rei Leão" de 1994.';

// 04 - Adicione uma classe igual para os dois parágrafos.
// 05. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;

console.log(document.querySelectorAll('.paragrafos')[0].innerText);

// 6. Altere algum estilo do primeiro deles.
let parametro = document.querySelectorAll('.paragrafos');

parametro[0].style.backgroundColor = 'pink';


// 7. Recupere o subtítulo e altere a cor dele usando a função querySelectorAll .

let subtitulo = document.querySelector('#subtitle');
subtitulo.style.color = 'red';
