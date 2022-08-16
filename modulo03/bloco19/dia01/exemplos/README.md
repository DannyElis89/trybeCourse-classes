# Bloco 19 - Docker: Utilizando Containers
## Dia 01 - Utilizando Containers - Docker:

### Comandos básicos:

* Formato padrão para comandos não-abreviados no CLI:
  * `docker <comando> <subcomando> <parâmetros>`

* Utilize o parâmetro `--help` no comando ou subcomando para ter a relação completa do que pode ser executado a partir deles;
  * `docker container --help` *ou* `docker container run --help`
* Os `<parâmetros>` são opcionais na execução dos comandos;
* Listar todas as imagens presentes na máquina: `docker images`;
* Listar containers:
  * Listar containers em execução: `docker ps` *ou* `docker container ls`;
  * Listar todos os containeres (ativos ou inativos): `docker container ls -a`;
* Executar um container: `docker container run <flags>? <imagem>:<tag>`;
* Remover um container:
  * `docker rm <nome-do-container>`;
  * Remover automaticamente após sua execução: ` docker container run --rm <imagem>`
* Execução em segundo plano: `docker container run -d <imagem>`
* Forçar parada: `docker stop <nome-do-container>`;

### Comandos avançados:
* Acessando o terminal do container: `docker exec -it <nome-do-container> <comando-a-ser-executado>`;
  * Executamos o comando `docker exec -it meu-container sh`;
    * Passando a flag `-t` e solicitando a criação de uma sessão de terminal;
    * Passando a flag `-i`, necessária para que a sessão seja interativa;
    * O comando a ser executado será `sh`, que é um programa de terminal linux.
  * Já dentro do container, o comando `ps aux` lista todos os comandos em execução;

![Passos do Docker durante a execução de um comando.](https://assets.app.betrybe.com/back-end/docker/introduction/images/docker-exec-a31708ac17a78cb8a8b77f17c513b096.png)

* Logs de um conteiner em execução em segundo plano: `docker logs <flags> <nome-do-container>`;

![Passos do Docker durante a obtenção dos logs.](https://assets.app.betrybe.com/back-end/docker/introduction/images/docker-logs-8b6382c289efd24bc7e7d70a2fb2e900.png)

* Monitoramento de processos dentro do container: `docker top <nome-do-container>`;

* Limpar containers que não estão sendo utilizados: `docker container prune`;
  * **Remove todos os containers inativos do computador**
