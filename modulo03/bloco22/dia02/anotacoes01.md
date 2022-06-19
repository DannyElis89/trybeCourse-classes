# Bloco 22: Introdução ao desenvolvimento Web com Node.js
## Dia 02: Intro - Node.js - Fluxo Assíncrono


### Callbacks:
* É um listener, uma função que será disparada em segundo plano *QUANDO* e *SE* um evento acontecer.
* Exemplo com a função `readFile` do módulo `fs` do Node.js:

  ~~~javascript
  const fs = require('fs');

  fs.readFile('./arquivo.txt', (err, content) => {
    if (err) {
      console.error(`Erro ao ler o arquivo: ${err.message}`);
      return;
    }

    console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
  });
  ~~~

  * Agora, vamos entender como esse código funciona:
    * Primeiro, pedimos que o Node.js leia o arquivo e passamos uma função de callback;
    * Quando a leitura do arquivo é concluída ou um erro acontece, a função callback é chamada;
      ~~~javascript
      fs.readFile('./arquivo.txt', (err, content) => {}
      ~~~

    * Dentro dela, a primeira coisa que fazemos é verificar se existe um erro. Caso exista, escrevemos ele no console e encerramos a execução com o `return`;
      * `err`: é um erro que pode ter ocorrido durante a leitura do arquivo.

      ~~~javascript
      if (err) {
        console.error(`Erro ao ler o arquivo: ${err.message}`);
        return;
      }
      ~~~
      > Caso nenhum erro tenha ocorrido, o arquivo foi lido com sucesso e o valor de `err` será `undefined`.

      * `content`: nesse caso é o conteúdo do arquivo, que está em forma de uma sequência de bytes.
      > Observação: Caso ocorra um erro na leitura do arquivo, esse parâmetro será `undefined`.

-------

### Promises:
* Ferramenta útil para melhorar a legibilidade do código quando diversas funcões assíncronas são necessárias;
* `Promise` *x* `callbacks`;
  * `callbacks`:
    * Apenas uma função que recebe tanto o *sucesso* quanto o *erro*;
  * `Promises`:
    * Registro erro e sucesso em funções separadas;
    * É possível registrar vários callbacks de sucesso para serem executados um após o outro, sempre recebendo o resultado do callback anterior, sem ocorrer a formação do *callback hell*;
      > Para fazermos isso, utilizamos vários `.then` em uma mesma Promise. As funções que passamos para cada then serão executadas em sequência, e o resultado de uma será passado para a próxima.

* Promise:
  * Uma *promise* pode se tornar *realizada* com um valor ou *rejeitada* por um motivo (err):
    * Caso um estado de erro ocorra, o método `catch` do Promise é chamado. Esse método, por sua vez, chama o método de tratamento associado ao estado rejected.
    * Caso o `then` ocorra, ele chama o método `resolved`.
    * Exemplos:
      * Função *sem* promise:
        * Fluxo síncrono;
        * Tratamento de exceção na chamada da função, utilizando *`try`/`catch`*;
        ~~~javascript
        // funcaoSemPromise.js
        function calculaDivisao(num1, num2) {
          if (num2 === 0) throw new Error('Não pode ser feito divisão por zero.');

          const resultado = num1 / num2;
          return resultado;
        }

        try{
          const resultado = calculaDivisao(2, 0);
          console.log('resultado: %s', resultado);
        }  catch (e) {
          console.log('erro: %s', e.message);
        };
        ~~~

      * Função *com* promise:
        * Fluxo assíncrono;
        * "*Envelopamento*" do código da função em uma promise (`new Promise`):
          * A *promise* trata os casos de sucesso e falha;
            > *`resolve` e `reject`;*
          * A função retorna a promise;
            > *Como a função retorna uma promise, é preciso tratar esse retorno utilizando o `.then` e o `.catch`;*

        ~~~javascript
        // funcaoComPromise.js
        function calculaDivisao(num1, num2) {
          const promise = new Promise((resolve, reject) => {
            if (num2 === 0) reject(new Error('Não pode ser feito divisão por zero.'));

            const resultado = num1 / num2;
            resolve(resultado);
          });

          return promise;
        };

        calculaDivisao(2, 0)
          .then((result) => console.log(result))
          .catch((err) => console.log('erro: %s', err.message))

        ~~~


-------

### Fixando os aprendizados:


-------

### Lendo arquivos com métodos síncronos:


-------

### Lendo arquivos com métodos assíncronos:


-------

### Escrevendo dados em arquivos:


-------

### Utilizando async/await:


-------

### Rodando promessas simultaneamente com Promise.all:


-------

### Atributos adicionais na utilização de métodos de leitura e escrita no fs:


-------
