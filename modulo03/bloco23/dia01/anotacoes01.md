# Bloco 23: Node.js: Camada de Serviço e Arquitetura Rest e Restful
## Dia 01: Arquitetura de Software && Camada Model
### Anotações:

#### Arquitetura MSC:
* **Camada de Modelo (M):**
  * *Arquivos onde são executadas as operações do banco de dados, como criar conexões e executar queries.*
* **Camada de Serviço (S):**
  * *Arquivos onde são estruturadas as regras de negócio, geralmente é quem chama os métodos definidos na camada de modelo.*
* **Camada de Controladores (C):**
  * *Interface mais próxima da pessoa usuária ou de uma requisição, irá processar e chamar as devidas funções da camada de serviço.*

#### Camada Model
* Única camada que manipula e define os dados;
* Responsável por abstrair completamente os detalhes de acesso e armazenamento, fornecendo somente uma API que permita requisitar e manipular esses dados.
* Deve ser completamente desacoplado das demais camadas;
* Reusabilidade do código, ex:
  * Model de requisição a um banco de dados:
    ~~~javascript
    // userModel.js

    const db = require('./db'); // Arquivo "fictício" que representa a conexão com o banco

    async function getUser (username) {
      return db.findOne({ username })
      .then(result => result || null);
    }
    ~~~

  * Reutilização em uma interface de linha de comando (CLI):
    ~~~javascript
    // cli.js

    const readline = require('readline-sync');
    const userModel = require('./userModel');

    async function start() {
      const username = readline.question('Digite seu nome de usuário');
      const user = await userModel.getUser(username);

      if (!user) {
        return console.log('Usuário não encontrado');
      }

      console.log('Aqui estão os dados do usuário:');
      console.log(user);
    }

    start();
    ~~~

  * Reutilização em um middleware:
    ~~~javascript
    // getUserMiddleware.js

    const userModel = require('./userModel');

    function getUserMiddleware (req, res, next) {
      const { username } = req.body;

      try {
        const user = await userModel.getUser(username);

        if (!user) {
          return res.status(404).json({ message: 'user não encontrado' });
        }

        return res.status(200).json(user);
      }catch(e){
        res.status(500).json({message: `Algo deu errado :(`});
      }
    }
    ~~~
