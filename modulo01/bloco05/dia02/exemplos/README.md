# Bloco 5 - JavaScript: DOM, Eventos e Web Storage - Dia 02: Trabalhando com elementos:
----------
### Parte I - Propriedades seletoras:

* parentNode : retorna o nó pai.
* parentElement : retorna o elemento pai.
* childNodes : retorna um NodeList com todos os nós filhos.
* children : retorna um HTMLCollection com todos os elementos filhos.
* firstChild : retorna o primeiro nó filho.
* firstElementChild : retorna o primeiro elemento filho.
* lastChild : retorna o último nó filho.
* lastElementChild : retorna o último elemento filho.
* nextSibling : retorna o próximo nó.
* nextElementSibling : retorna o próximo elemento.

      À primeira vista, as propriedades nextSibling e nextElementSibling parecem fazer a mesma coisa, mas uma pega o próximo nó do DOM , enquanto a outra pega o próximo elemento, e nem sempre o próximo nó é um elemento.

* previousSibling : retorna o nó anterior.
* previousElementSibling : retorna o elemento anterior.


----------
### Parte I:
#### Exemplo 01:
arquivos exemplo01.html e exemplo01.js
1. Acesse o elemento elementoOndeVoceEsta .
2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
4. Acesse o primeiroFilho a partir de pai .
5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
8. Agora acesse o terceiroFilho a partir de pai .


----------
### Parte II - Criando elementos:
#### Exemplo 02:
arquivos exemplo02.html e exemplo02.js
1. Crie um irmão para elementoOndeVoceEsta .
2. Crie um filho para elementoOndeVoceEsta .
3. Crie um filho para primeiroFilhoDoFilho .
4. A partir desse filho criado, acesse terceiroFilho .
