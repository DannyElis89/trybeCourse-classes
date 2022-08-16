# Bloco 19 - Docker: Utilizando Containers
## Dia 02 - Manipulação e Criação de Imagens no Docker

### Manipulando Imagens no Docker
* Listar imagens docker no domcputador: `docker images`;
* Baixar imagem docker sem executar um container: `docker pull <nome-da-imagem>:<tag>`, *por exemplo: `docker pull alpine:3.14`*;
* Deletar uma imagem: `docker rmi <ID-da-imagem>`;

### Dockerfile
* Criação do arquivo Dockerfile com as informações necessárias para construção da imagem;
* Dentro do diretório do dockerfile, no terminal, execução do comando `docker build -t <nome-da-imagem> .`
;
  * A flag `-t <nome-da-imagem>` indica ao Docker o nome da imagem;
  * O ponto no final do comando (`.`)  indica ao docker que o processo de construção deve se basear na pasta atual;
  * Flag `-p <num1>:<num2>`:
    * *`<num1>`* porta utilizada no computador;
    * *`<num2>`* porta utilizada na imagem;
* Construção em múltiplos estágios
  * Cada `FROM` dentro do Dockerfile significa o início de um novo estágio;
  * Processo de criação de uma imagem Docker super otimizada, com o uso de imagens intermediárias.


### RUN vs. ENTRYPOINT vs. CMD
* `RUN <comando> <argumento1> <argumento2> <argumentoN>`:
  * `RUN` é a execução imediata durante o build;
  * Indica que o comando dado deve ser executado durante a construção da imagem Docker!
  * Ou seja, é muito comum utilizar o RUN para fazer instalações de dependências.

* `ENTRYPOINT <comando> <argumento1> <argumento2> <argumentoN>`:
  * `ENTRYPOINT` é a execução obrigatória ao iniciar o container;
  * Indica qual é o comando (e seus argumentos) que deve ser executado ao iniciar esta imagem Docker como um container;
  * Considere o `ENTRYPOINT` como obrigação de comando a ser executado;
  * Ele sempre será utilizado como ponto de entrada da imagem.

* `CMD <comando> <argumento1> <argumento2> <argumentoN>`:
  * `CMD` é uma sugestão de parâmetros ao iniciar o container.
  * Indica qual é o comando (e seus argumentos) que pode ser executado ao iniciar esta imagem Docker como um container;
  * Conside o `CMD` como sugestão de comando a ser executado;
  * Ele pode ser substituído ao executar o comando `docker run imagem <comando> <argumento1>`.

### Exemplos:
#### Criando e rodando uma aplicação React com Dockerfile
Para deixar as coisas mais interessantes, vamos dockerizar uma aplicação React. Não faremos incrementos na aplicação porque nosso intuito aqui é focar no processo de dockerização dela.
