# Bloco 22 - Introdução ao desenvolvimento Web com Node.js
## Dia 03: Mocha, Chai e Sinon - Testes de Back-end com Node.js
### Exercícios:

1. Fazendo uso de mocha e chai, estruture os testes para uma função que vai dizer se um número é "positivo", "negativo" ou "neutro":

    *Essa função vai receber um número como parâmetro e retornar uma string como resposta;*

    *Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";*

    * Descreva todos os cenário de teste utilizando `describes`;
    * Descreva todos os testes que serão feitos utilizando `its`;
    * Crie as asserções validando se os retornos de cada cenário têm o tipo e o valor esperado.

2. Implemente a função apresentada no exercício 1 garantindo que ela vai passar em todos os testes que você escreveu.

    > ⚠️ Lembre-se de adicionar o script de test no package.json e de instalar as dependências.

3. Adicione à função do exercício 01 um tratamento para casos em que o parâmetro informado não seja do tipo `Number`.

    * Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função;
    * Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
    * Implemente em sua função tal validação para que o teste passe.


4. Crie testes para uma função que escreverá um conteúdo em um arquivo específico.

    *Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo;*

    *Após concluir a escrita do arquivo ela deverá retornar um ok.*

    * Descreva todos os cenários de teste utilizando describes;
    * Descreva todos os testes que serão feitos utilizando its;
    * Crie as asserções validando se o retorno da função possui o valor e tipo esperado.

5. Implemente a função descrita no exercício 4.

    * Crie a função descrita no exercício 4 utilizando o módulo `fs` do node.
    * Adapte os testes adicionando stub ao módulo utilizado do fs, isolando assim o teste.
    * Garanta que todos os testes escritos no exercício 4 vão passar com sucesso.
