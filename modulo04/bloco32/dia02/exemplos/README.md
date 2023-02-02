# Módulo 04 - Ciência da Computação
## Bloco 32: Introdução à Python
### Dia 02: Entrada e Saída de Dados
#### Exemplos:

**Exercício 1:** Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical. Exemplo:

~~~
F
U
L
A
N
O
~~~

**Exercício 2:** Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: “Erro ao somar valores, {valor} é um valor inválido”. Ao final, você deve imprimir a soma dos valores válidos.

🦜 Receba os valores em um mesmo *input*, solicitando à pessoa usuária que separe-os com um espaço. Receba os valores no formato *str* e utilize o método *split* para pegar cada valor separado. O método *isdigit*, embutido no tipo *str*, pode ser utilizado para verificar se a string corresponde a um número natural.

**Exercício 3:** Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que:

  1. lê todas essas informações;
  2. aplique um filtro, mantendo somente as pessoas que estão reprovadas;
  escreva seus nomes em outro arquivo.
  1. Considere que a nota miníma para aprovação é 6.

Arquivo:

~~~
Marcos 10
Felipe 4
José 6
Ana 10
Maria 9
Miguel 5
~~~
