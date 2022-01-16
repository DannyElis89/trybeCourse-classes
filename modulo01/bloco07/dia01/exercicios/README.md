# Bloco 7 - Introdução à JavaScript ES6 e Testes Unitários
## Dia 01: JavaScript ES6 - let, const, arrow functions e template literals

____________________________

### Parte I:
Agora você vai fazer alguns exercícios de fixação.
1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

* Modifique a estrutura da função para que ela seja uma arrow function .
* Modifique as concatenações para template literals .
* Copie o código abaixo.

        * Arquivo exercicio01.js

2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

* Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
* Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
* Copie o código abaixo.

        * Arquivo exercicio02.js

____________________________

### Parte II:
Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator.

3. Crie uma função que receba um número e retorne seu fatorial.
* Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
* Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator.

        * Arquivo exercicio03.js

4. Crie uma função que receba uma frase e retorne qual a maior palavra.
* Exemplo:
~~~javascript
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
~~~
        * Arquivo exercicio04.js

5. Crie uma página que contenha:
* Um botão ao qual será associado um event listener ;
* Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
* Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

        * Arquivos exercicio05.js e exercicio05.html

5. Crie um código JavaScript com a seguinte especificação:
* Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

    * String determinada: "Tryber x aqui!"
    * Parâmetro: "Bebeto"
    * Retorno: "Tryber Bebeto aqui!"

    * Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

* Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string. Exemplo:

    * "Tryber x aqui! Minhas cinco principais habilidades são:
      * JavaScript;
      * HTML;
      * #goTrybe".

                 * Arquivo exercicio06.js
