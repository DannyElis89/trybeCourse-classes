# Bloco 19: Docker: Utilizando Containers
## Dia 03: Orquestrando Containers com Docker Compose
### Criando nosso primeiro arquivo Compose
* Estrutura de pastas e arquivos do exemplo:
  ~~~
    aula-docker-compose/
    ├── backend
    │   └── Dockerfile
    ├── frontend
    │   └── Dockerfile
    └── docker-compose.yaml
  ~~~

### Gerenciando nossos Serviços
* Subindo todos os serviços: `docker-compose up -d`
  * *A flag `-d` serve para executarmos todos os serviços no modo segundo plano;*
* Verificando o status dos serviços: `docker-compose ps`;
* Reconstruindo a Imagem Docker: `docker-compose up -d --build`;
* Descendo todos os serviços: `docker-compose down`;
* Subindo serviços específicos: `docker-compose up <nome-do-serviço>`;
* Visualizando os logs dos serviços: `docker-compose logs <nome-do-serviço>`;

### Arquivos Compose mais robustos
* Criando volumes: configurar o arquivo `docker-compose.yaml`:

~~~dockerfile
  version: "3"
  services:
    frontend:
      build: frontend/
      restart: always
      ports:
        - 3000:3000
      depends_on:
        - backend
      volumes:
        - ./logs:/var/log/frontend
    backend:
      build: backend/
      restart: always
      ports:
        - 3001:3001
      environment:
        - DB_HOST=database
      depends_on:
        - database
    database:
      image: betrybe/docker-compose-example-database:v1
      restart: always
      volumes:
        - dados-do-banco:/data/db

  volumes:
    dados-do-banco:
~~~

  * `volumes` no final do arquivo:
    * `volumes: dados-do-banco:`;
    * Especifica para o *Compose* que ele deve criar um **volume virtual** com o nome *dados-do-banco*.
    * Este volume deverá ser mapeado para dentro de algum serviço.

  * Database:
    * `volumes: - dados-do-banco:/data/db`;
    * Mapeia o volume no final do *docker-compose*;
    * É uma lista com um item e recebe os dados no seguinte formato: `<nome-do-volume>:<caminho-no-container-para-montar>`;

  * Frontend:
    * `volumes: - ./logs:/var/log/frontend`;
    * Mapeia uma **pasta local** (`./logs`) para uma pasta no serviço de frontend (`/var/log/frontend`);
    * Desta maneira não é necessário criar um volume virtual, pois é utilizada uma pasta na máquina local.

![Integração entre volumes e serviços no Compose](https://assets.app.betrybe.com/back-end/docker/docker-compose/images/docker-compose-volumes-211e36c4baef0419ae1c0e7a674b33a4.png)

### Criando redes virtuais
* Comunicação direta entre serviços:
  * `Front-end` :left_right_arrow: `Back-end` :left_right_arrow: `database`;
* Limitar comunicações entre serviçoes que não precisam se comunicar aumenta a segurança e robustez dos serviços.
* *`docker-compose.yaml`*:

~~~dockerfile
  version: "3"
  services:
    frontend:
      build: frontend/
      restart: always
      ports:
        - 3000:3000
      depends_on:
        - backend
      volumes:
        - ./logs:/var/log/frontend
      networks:
        - rede-virtual-1
    backend:
      build: backend/
      restart: always
      ports:
        - 3001:3001
      environment:
        - DB_HOST=database
      depends_on:
        - database
      networks:
        - rede-virtual-1
        - rede-virtual-2
    database:
      image: betrybe/docker-compose-example-database:v1
      restart: always
      volumes:
        - dados-do-banco:/data/db
      networks:
        - rede-virtual-2

  volumes:
    dados-do-banco:

  networks:
    rede-virtual-1:
    rede-virtual-2:
~~~

* No final do arquivo existe uma nova chave em primeiro nível: `networks`;
  * Dentro desta chave, existem duas novas redes virtuais sendo definidas: `rede-virtual-1` e `rede-virtual-2`;
  * Ao utilizar esta chave, o *Compose* não vai mais criar a rede virtual padrão, como estava fazendo antes!

* Para cada serviço, existem as novas chaves `networks`:
  * Front-End: presente na `rede-virtual-1`
  * Back-end: presente na `rede-virtual-1` e `rede-virtual-2`;
  * Database: presente na `rede-virtual-2;`

![Integração entre redes virtuais e serviços no Compose](https://assets.app.betrybe.com/back-end/docker/docker-compose/images/docker-compose-varias-redes-34626026cabae53b8a6a2ae3021f7a50.png)


### Serviço vs. container
* Para proporcionar **alta escalabilidade**, é normal que existam **múltiplas cópias dos containers atendendo o mesmo serviço**
  * O comando `docker-compose up` aceita uma flag `--scale service=<número-de-replicas>` para configurar estas cópias;
