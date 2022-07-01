# Resumo comandos para criar aplicação Node.js

* `npm init -y`:
  * Inicializa um novo pacote *Node.js* dentro do diretório;
* `npm i express`:
  * Instala o *express* na aplicação;
  * *Framework Node.js criado para facilitar a criação de APIs HTTP com Node.*
* `npm i nodemon -D`:
  * Instala o pacote *Nodemon*, que reinicia a aplicação toda vez que os arquivos são editados e salvos;
  * Adicionar no arquivo `package.json` o seguinte código:
    ~~~javascript
    //...
    // "scripts": {
    //    "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "nodemon index.js"
    //  },
    // ...
    ~~~
  * Executar nodemon via terminal com o comando *`npm run dev`*;
* `npm i cors`:
  * Módulo que libera o acesso da API para outras aplicações via requisições;
    ~~~javascript
    // const express = require('express');
    // const app = express();
    const cors = require('cors');

    app.use(cors());
    ~~~

* `npm i body-parser`:
  * Evio de dados pelo `body` da requisição;
  * Compressão de dados transmitidos entre cliente e banco de dados para diminuir a exposição de informações sensíveis;
  * Serialização dos dados enviados;
