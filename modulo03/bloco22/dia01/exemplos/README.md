# Bloco 22: Introdução ao desenvolvimento Web com Node.js
## Dia 01: Intro - Node.js e Node.js - Um motor JavaScript

### Hello world em Node.js

1. Criando o pacote Node.js:
  * Criar pasta `hello-world` e dentro deste diretório:
    * Executar o comando `npm init` no ;
    * Criar o arquivo `index.js`;
      > Por padrão, esse é o arquivo principal de qualquer aplicação Node.js e deve ser executado para iniciar o programa. Por convenção, todo pacote Node.js deve ter um arquivo `index.js`, salvo exceções, que devem ser documentadas no `README` do repositório.

2. Criando o código do `Hello, world!`
  * No arquivo `index.js`, adicione o seguinte código:
    ~~~javascript
      console.log('Hello, world!');
    ~~~

3. Criando o script start:
  * No arquivo `package.json`, altere a linha destacada para criar o script start dessa forma:
    ~~~json
      // {
      //   "name": "hello-world",
      //   "version": "1.0.0",
      //   "description": "",
      //   "main": "index.js",
      //   "scripts": {
      //     "test": "echo \"Error: no test specified\" && exit 1",
            "start": "node index.js"
      //   },
      //   "author": "Seu nome",
      //   "license": "ISC"
      // }
    ~~~

  * Execute o script com o comando `npm start` via terminal dentro da pasta `hello-world`;

4. Lendo input no terminal:
  * Para ler as respostas que o usuário inserir no terminal, será necessário instalar o pacote `readline-sync`;
    ~~~shell
    $ npm i readline-sync
    ~~~

  * Importar o módulo `readline-sync` no arquivo `index.js` para utilizar as funções `question` e `questionInt`:

    ~~~javascript
    // index.js
    const readline = require('readline-sync'); // importa o módulo

    const name = readline.question('Qual seu nome? ');
    const age = readline.questionInt('Qual sua idade? ');

    console.log(`Olá, ${name}! Você tem ${age} anos de idade!`);
    ~~~

  * Executar o código no terminal:
    ~~~shell
    $ npm start

    > hello-world@1.0.0 start
    > node index.js

    Qual seu nome? Danny Elis
    Qual sua idade? 33
    Olá, Danny Elis! Você tem 33 anos de idade!
    ~~~
