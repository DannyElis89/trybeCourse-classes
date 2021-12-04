// 01 - Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.

console.log(document.getElementById('page-title').innerHTML);

document.getElementById('page-title').innerText = 'Filme favorito: as branquelas';

console.log(document.getElementById('page-title').innerText);

// 02 - Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.

console.log(document.getElementById('second-paragraph').innerHTML);

document.getElementById('second-paragraph').innerText = 'Já assisti diversas vezes!';

console.log(document.getElementById('second-paragraph').innerText);

// 03 - Por fim, recupere o subtítulo e altere-o também.

console.log(document.getElementById('subtitle').innerHTML);

document.getElementById('subtitle').innerText = 'Dublado ou legendado, é bom de qualquer jeito!';

console.log(document.getElementById('subtitle').innerText);
