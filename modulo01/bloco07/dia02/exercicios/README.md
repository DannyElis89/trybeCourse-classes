# Bloco 07:  Introdução à JavaScript ES6 e Testes Unitários
## Dia 02: JavaScript ES6 - Fluxo de exceção e Objetos

------

### Parte I
Lembra da calculadora que fizemos como exemplo anteriormente? Hora de levá-la para um nível mais avançado!
Copie e cole o código abaixo no seu editor de texto:

    * Arquivos exercicio01.html e exercicio01.js

Tire um tempinho para entender o código acima:
* A aplicação pede ao usuário que informe dois números para realizar uma soma. Esses números são inseridos através dos inputs ;
* Ao clicar o botão, a função sum é chamada, capturando o valor escrito nos inputs e realizando a operação. Antes, é necessária a conversão do valor usando o parseInt , pois ele chega à função em forma de string ;
* Ao final, a função sum imprime o valor em um parágrafo e limpa os inputs para que a pessoa usuária possa inserir novos valores.

Aparentemente está tudo funcionando, mas a aplicação não possui fluxo de exceção. Ou seja, caso ocorra um erro, eles não serão tratados. Que tal resolver isso?

1. Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.

* Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?
* Utilize o throw new Error e o bloco try/catch .
* Imprima o erro no parágrafo com id result , para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
* Evite funções que tenham muitas responsabilidades distintas.

2. Agora adicione uma outra exceção, caso a pessoa usuária digite um valor que não seja numérico.

* Você pode fazer essa verificação utilizando a função isNan().

3. Você se lembrou de limpar os inputs após o clique do botão? Teve que repetir código para isso? Que tal refatorar sua função utilizando o finally ?

------

### Parte II
Para os exercícios a seguir, use o seguinte código.

    * Arquivo exercicio02.js

Agora você vai fazer alguns exercícios de fixação.

1.  a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
* Note que o parâmetro da função já está sendo passado na chamada da função.
2. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
* Modifique o nome da pessoa compradora.
* Modifique o valor total da compra para R$ 50,00.

------

### Parte III
Para os exercícios a seguir, use o seguinte código.

    * Arquivo exercicio03.js

1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
3. Crie uma função para mostrar o tamanho de um objeto.
4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3. Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

~~~javascript
console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
~~~

6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

~~~javascript
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
~~~

8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

~~~javascript
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
~~~


