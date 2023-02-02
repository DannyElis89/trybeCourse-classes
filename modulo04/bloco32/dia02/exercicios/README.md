# Módulo 04 - Ciência da Computação
## Bloco 32: Introdução à Python
### Dia 02: Entrada e Saída de Dados
#### Exercícios:

**Exercício 01:** Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:

  Entrada:

  ~~~
  PEDRO
  ~~~

  Saída:

  ~~~
  PEDRO
  PEDR
  PED
  PE
  P
  ~~~


**Exercício 02:** Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

  * Para embaralhar uma palavra faça: `scrambled_word = "".join(random.sample(word, len(word)))`

  * O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: `random.choice(["word1", "word2", "word3"]) -> "word2"`.

**Exercício 03:** Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.


**Exercício 04:** Dado o seguinte arquivo no formato JSON, leia seu conteúdo e calcule a porcentagem de livros em cada categoria em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.

  Saída:

  ~~~
  categoria,porcentagem
  Python,0.23201856148491878
  Java,0.23201856148491878
  PHP,0.23201856148491878
  ~~~
