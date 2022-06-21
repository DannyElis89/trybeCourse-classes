# Bloco 22: Introdução ao desenvolvimento Web com Node.js

## Dia 02: Intro - Node.js - Fluxo Assíncrono

O código JS normalmente é executado de maneira *síncrona*, ou seja, *linha a linha*.

Como algumas execuções podem ser mais custosas, essa sincronicidade pode causar lentidão ou falhas nas aplicações.

Para resolver esse problema foram criadas maneiras de executar o código de maneira *assíncrona*, ou seja, alguns trechos do código são executados em *segundo plano*, sem impedir o avanço da execução das demais linhas e também sem causar erros ou lentidão na aplicação.

* Exemplo de código síncrono:
  * Código `.js`:
    ~~~javascript
    console.log(1);
    console.log(2);
    console.log(3);
    ~~~

  * Saída no terminal:
    ~~~shell
    1
    2
    3
    ~~~

### Callbacks

Utilizando *callbacks*, o javascript *"empilha"* requisições para executar funções assíncronas.
* Quando a função assíncrona termina de ser executada em segundo plano *(no exemplo abaixo, quando a função `readFile` do pacote `fs` do Node.js terminar de ler o arquivo)*, o javascript *chama de volta* um trecho do código específico. Por ser *chamado de volta*, essa função normalmente recebe o nome de `callback`;

  * Código `.js`:
    ~~~javascript
    const fs = require('fs');

    function callback(err, contents) {
      console.log(err, String(contents));
    }

    console.log(1);

    fs.readFile('./nome-do-arquivo-1.txt', callback);
    // uma forma menos custosa de escrever a função acima e sua callback é utilizando uma arrow function como segundo parâmetro:
    // fs.readFile('./nome-do-arquivo.txt', (err, contents) => {
      // console.log(err, String(contents)));
    // };

    console.log(2);
    console.log(3);
    ~~~

  * Saída no terminal:
    ~~~shell
    1
    2
    3
    null 'conteúdo do arquivo 1'
    ~~~

    * Os console.log foram lidos em sequência sem ocorrer o bloqueio da execução do script;
    * Após o término da leitura do arquivo, a `callback` foi chamada para imprimir no terminal o retorno da função que lê arquivos;
      * Esse retorno pode ser o conteúdo do arquivo (`contents`), ou uma mensagem de erro (`err`) caso tenha oorrido algum problema na leitura;

#### Desvantagens da utilização de *callbacks*: **formação de callback hell**

![callback hell](https://miro.medium.com/max/721/1*zxx4iQAG4HilOIQqDKpxJw.jpeg)

  * Aumento da complexidade;
  * Redução da legibilidade;
  * Aumento da dificuldade de:
    * Manutenção (encontro e correção de erros);
    * Implementação de novas funcionalidades;

  * Exemplo:
    * *Código `.js`:*
      ~~~javascript
      const fs = require('fs');

      console.log(1);

      fs.readFile('./nome-do-arquivo.txt', (err, contents) => {
        console.log(4);
        fs.readFile('./nome-do-arquivo-2.txt', (err2, contents2) => {
          fs.readFile('./nome-do-arquivo-3.txt', (err3, contents3) => {
            console.log(err, String(contents));
            console.log(err2, String(contents2));
            console.log(err3, String(contents3));
          });
        });
      });

      console.log(2);
      console.log(3);
      ~~~

    * *Saída no terminal:*
      ~~~shell
      1
      2
      3
      4
      null 'conteúdo do arquivo 1'
      null 'conteúdo do arquivo 2'
      null 'conteúdo do arquivo 3'
      ~~~

-----

### Promises
Uma maneira mais organizada e legível de executar tarefas assíncronas;
  * Em *callbacks*, o script da função é executado em segundo plano e, ao terminal a callback é chamada para '*entregar o resultado*' da função assíncrona;
  * Em *Promises*, uma promessa pendente é retornada assim que a função é chamada, e posteriormente essa promessa será resolvida ou rejeitada;

  * Exemplo:
    * *Código javascript:*
      ~~~javascript
      const fs = require('fs');

      const readFile = file => new Promise((resolve, reject) => {
        fs.readFile(file, (err, contents) => {
          if(err) {
            reject(err);
          } else {
            resolve(contents);
          }
        })
      });

      readFile('./nome-do-arquivo')
        .then(contents => {
          console.log(String(contents));
          return readFile('./nome-do-arquivo-2');
        })
        .then(contents2 => {
          console.log(String(contents2));
        })
      ~~~
