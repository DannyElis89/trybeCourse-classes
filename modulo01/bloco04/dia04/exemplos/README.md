# Bloco 4 - JavaScript - Objetos e funções - Dia 04 - Para fixar:
### Exemplos Objetos:
1. Crie um objeto player contendo as variáveis listadas abaixo.
      * let name = 'Marta';
      * let lastName = 'Silva';
      * let age = 34;
      * let medals = { golden: 2, silver: 3 };

2. Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
3. Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
      * [2006, 2007, 2008, 2009, 2010, 2018]
4. Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
5. Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

### Exemplos For/in:
1. Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
~~~javascript
let names = {
      person1: 'João',
      person2: 'Maria',
      person3: 'Jorge'
      };
~~~
2. Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
~~~javascript
 let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
~~~
### Exemplos Funções:
Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.
Após refatorar o seu código , verifique se ele ainda está funcionando conforme especificado. Teste cada função com algumas entradas diferentes.

1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

       Adição (a + b)
       Subtração (a - b)
       Multiplicação (a * b)
       Divisão (a / b)
       Módulo (a % b)


2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.


3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.


4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

    * Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
    * Um ângulo será considerado inválido se não tiver um valor positivo.




