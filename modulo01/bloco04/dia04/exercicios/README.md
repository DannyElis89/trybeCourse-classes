# Bloco 4 - JavaScript - Objetos e funções - Dia 04 - Exercícios:
__________

### Parte I - Objetos e For/In:
#### Arquivo 'exerciciosParte01.js'
##### Usando o objeto abaixo, faça os exercícios a seguir (01 ao 05):

~~~javascript
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
~~~

1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

~~~javascript
Bem-vinda, Margarida
~~~

2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

~~~javascript
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};
~~~

3. Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

       personagem
       origem
       nota
       recorrente

4. Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

       Margarida
       Pato Donald
       Namorada do personagem principal nos quadrinhos do Pato Donald
       Sim

5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

~~~javascript
       Margarida e Tio Patinhas
       "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178"
       Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
       Ambos recorrentes // Atenção para essa última linha!
~~~
__________

#### Arquivo 'exerciciosParte02.js'
##### Usando o objeto abaixo, faça os exercícios a seguir (06 ao 08):

~~~javascript
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
~~~

6. Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

7. Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

~~~javascript
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
};
~~~

8. Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

__________
__________

### Parte II - Funções:
#### Arquivo 'exerciciosParte03.js'

_Spoiler-alert : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis._

1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.


        Exemplo de palíndromo: arara .
~~~javascript
        verificaPalindrome('arara') ;
        //Retorno esperado: true

        verificaPalindrome('desenvolvimento') ;
        //Retorno esperado: false ;
~~~


2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

~~~javascript
Array de teste: [2, 3, 6, 7, 10, 1]; .
//Valor esperado no retorno da função: 4 .
~~~

3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

~~~javascript
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
//Valor esperado no retorno da função: 6 .
~~~

4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

~~~javascript
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//Valor esperado no retorno da função: Fernanda .
~~~


5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

~~~javascript
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
//Valor esperado no retorno da função: 2 .
~~~

6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

~~~javascript
Valor de teste: N = 5 .
//Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
~~~

7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

~~~javascript
Valor de teste: 'trybe' e 'be';
//Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
//Retorno esperado: true;
verificaFimPalavra('joaofernando', 'fernan') ;
//Retorno esperado: false;
~~~

__________
__________

### Bônus:
#### Arquivo 'exerciciosParte04Bonus.js'

1. (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

![Alt Text](https://miro.medium.com/max/1838/1*GRDxOEjhNcOEKmTeTnz6iw.gif)

Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

    * _Dicas:_
       * Uma string é um array de caracteres, então cada elemento do array é uma letra.
       * O valor de cada numeral romano é:

            | I   | 1    |
            | --- | ---- |
            | IV  | 4    |
            | V   | 5    |
            | IX  | 9    |
            | X   | 10   |
            | XL  | 40   |
            | L   | 50   |
            | XC  | 90   |
            | C   | 100  |
            | CD  | 400  |
            | D   | 500  |
            | CM  | 900  |
            | M   | 1000 |

       * Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
       * Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

2. Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

~~~javascript
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
~~~

3. A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

~~~javascript
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
~~~
__________

 #### Usando o objeto abaixo, faça os exercícios a seguir:

 ~~~javascript
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};
 ~~~

4. Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".
5. Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , depois faça o mesmo para os moradores do bloco 2.
