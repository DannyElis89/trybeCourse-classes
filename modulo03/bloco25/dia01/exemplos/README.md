# Bloco 25 - Deployment
## Dia 01: Introdução - Deploy & Infraestrutura - Deploy com Heroku

### Heroku:
* Variáveis de ambiente:
  * Informações sensíveis;
  * Variáveis que podem mudar de acordo com o ambiente/máquina;
* Dynos:
  * Container utilizado no Heroku;
  * Alta escalabilidade;
* Executando localmente:
  * `npm install` para instalar as dependências NodeJs;
  * `heroku local web`: para rodar localmente o projeto na porta 5000


##### Primeiro deploy no Heroku
* Iniciar um projeto React com um projeto git:
  * `npx create-react-app meu-primeiro-deploy-heroku`

* Iniciar um repositório github ao projeto:
  * `git remote add origin git@github.com:[SEU_USUARIO_GITHUB]/meu-primeiro-deploy-heroku.git`;

* Listar os repositórios remotos vinculados ao projeto: `git remote -v`;

* Adicionar remote do Heroku:
  * Com um nome aleatório: `heroku create`;
  * Com um nome específico para o repositório: `heroku create meu-primeiro-deploy-2930`;
  * Por padrão, o CLI vai nomear todos os *remotes* criados como Heroku;
    * Passando a flag `--remote`, é possível passar um nome diferente:
      * `heroku create meu-deploy-de-testes-29302 --remote <nome-de-sua-escolha>`;
    * Renomear um remote já existente:
      * `git remote rename <nome-anterior> <novo-nome>`;
  * Ao executar qualquer um dos comandos acima em seu projeto, ele passa a ser um app do Heroku. Isso significa que o Heroku pode entendê-lo e gerenciá-lo.

* Remover um remote: `git remote rm heroku`

* Vincular um *app* a um novo remote:
  * `heroku git:remote -a <nome-do-seu-app-heroku> --remote <nome-do-seu-remote>`;

### *Buildpack*:
* Para fazer deploy, basta utilizar o comando `git push` de seu repositório local para a branch master do remote do Heroku: `git push heroku-origin master`;
* Sempre que der *push* na *branch master* do Heroku, seu último commit será publicado.
* Caso você dê *push* em qualquer outro remote adicionado, ou em outra branch que não seja o master, não terá efeito nenhum no Heroku.
* Para publicar uma versão que não está na *branch master*, após dar um `git add .` e um `git commit`, utilize o seguinte comando para realizar o deploy: `git push heroku-origin <nome-da-branch-de-origem>:master`

### Acompanhando a aplicação:
* Para listar os serviços que você tem em execução: `heroku apps`;
* Para exibir detalhes de um app específico: `heroku apps:info <nome-do-app>`;


### Variáveis de ambiente:
* Setar variáveis de ambiente: `config:set`;
  * Ex: `heroku config:set TESTE="texto qualquer" --app <nome-do-app>`;
* Para listar as variáveis de ambiente: `heroku config --app <nome-do-app>`

### Logs:
* Monitorar *logs*: `heroku logs --app <nome-do-app>`;
  * Por padrão, este comando retorna as 100 últimas linhas, caso queira alterar isso, utilizar o parâmetro `--num`ou `-n`:
    * `heroku logs -n 200 --app <nome-do-app>`;
  * O parâmetro `--tail` ou `-t` abre uma seção para mostrar em tempo real os últimos logs. Para retornar ao prompt, basta executar `Ctrl+C`:
    * `heroku logs --tail --app <nome-do-app>`;

### Removendo um app do Heroku:
* `heroku destroy --app <nome-do-app> --confirm <nome-do-app>`;
