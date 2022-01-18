# Bloco 7 - Introdução à JavaScript ES6 e Testes Unitários
## Dia 03: Primeiros passos em Jest

### Praticando a implementação de testes:

Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.
Copie as funções já implementadas e desenvolva os testes. Separe as funções e os testes em arquivos diferentes para evitar qualquer tipo de problema.


1. A função sum(a, b) retorna a soma do parâmetro a com o b:

      * Arquivos sum.js e sum.test.js

* Teste se o retorno de sum(4, 5) é 9
* Teste se o retorno de sum(0, 0) é 0
* Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
* Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array:

      * Arquivos myRemove.js e myRemove.test.js

* Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;
* Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];
* Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado;

3. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

      * Arquivos myFizzBuzz.js e myFizzBuzz.test.js

* Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado;
* Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado;
* Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado;
* Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado;
* Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado;

4. Para as funções encode e decode crie os seguintes testes em Jest:

      * Arquivos encodeDecode.js e encodeDecode.test.js

* Teste se encode e decode são funções;
* Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
* Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
* Teste se as demais letras/números não são convertidos para cada caso;
* Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

5. A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

~~~javascript
{
  tech: 'nomeTecnologia',
  name: name,
}
~~~

Implemente a função techList a partir dos testes abaixo. Experimente refatorar a função que você criou para esse projeto! É importante nunca alterar os testes ou as variáveis já escritas no código.

      * Arquivos techList.js e techList.test.js
