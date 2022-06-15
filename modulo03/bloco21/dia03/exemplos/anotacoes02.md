# Bloco 21: Funções SQL, JOINs e Normalização

## Dia 03: Transformando ideias em um modelo de banco de dados - Parte 2

### DUMPs:
* Um `dump` é o ato de pegar o esquema do banco de dados (e opcionalmente também os dados de cada uma dessas tabelas) e salvá-las em arquivos de texto, geralmente na forma de instruções SQL.
* O intuito desse processo é possibilitar que esses arquivos SQL sejam utilizados em algum outro lugar.

---

1. **Criando um dump de um banco de dados**:
  * Abra o `MySQL Workbench` e conecte-se ao seu servidor local.
  * Clique na aba `Administration` e selecione `Data Export`.
  * Para exportar schema e/ou dados, siga as instruções abaixo:
    1. *Escolha quais bancos de dados devem ser incluídos no backup;*
    1. *Escolha quais tabelas deve ser incluídas no backup;*
    1. *Escolha se `Stored Procedures` e `Stored Functions` devem ou não ser incluídas;*
    1. *Escolha se gostaria de exportar apenas estrutura (`Structure Only`), apenas os dados (`Data Only`) ou ambos (`Structure and Data`);*
    1. *Escolha se gostaria de incluir os `triggers` no arquivo de backup;*

      * `Trigger`: *procedimento armazenado no banco de dados chamado automaticamente sempre que ocorre um evento especial no banco de dados.*
        * *Geralmente esses eventos são alterações nas tabelas por meio de operações de inserção, exclusão e atualização de dados (`insert`, `delete` e `update`).*
        * Classes:
          * `Triggers DDL (Data Definition Language)`: *acionada em eventos que alteram a estrutura (como criar, modificar ou soltar uma tabela) ou em determinados eventos relacionados ao servidor, como alterações de segurança ou atualização de eventos estatísticos;*
          * `Triggers DML (Data Modification Language)`: *nesse caso o evento de disparo é uma declaração de modificação de dados; poderia ser uma instrução de inserção, atualização ou exclusão em uma tabela ou em uma exibição*;
        * Tipos:
          * `FOR` ou `AFTER` [`INSERT`, `UPDATE`, `DELETE`]:
            * *São executados após o término da instrução de disparo (inserção, atualização ou exclusão).*
          * `INSTEAD OF` [`INSERT`, `UPDATE`, `DELETE`]:
            * *Ao contrário do tipo FOR (AFTER), os Triggers `INSTEAD OF` são executados em vez da instrução de disparo.*
            * *Em outras palavras, esse tipo de trigger substitui a instrução de disparo. Isso é muito útil nos casos em que você precisa ter integridade referencial entre bancos de dados.*
    1. *Escolha se gostaria de incluir o esquema (código para criar banco de dados. Ex.: CREATE DATABASE)*;
    1. *Selecione o local para onde exportar o arquivo.*

  * Você deve escolher as opções de acordo com suas necessidades.
  * Feito isso, basta clicar no botão Start Export.

---

2. **Restaurando um banco de dados a partir de um dump com o MySQL Workbench**:
  * Abrir e executá-lo como um script dentro do MySQL;

---

3. **Criar e restaurar um dump de um banco de dados através da linha de comando**:
  * Útil quando ferramentas gráficas (como o Workbench) não estão disponíveis;
  * Comandos básicos do MySQL no terminal:
    * Acessando o MySQL via terminal:

      ~~~
      mysql -u <nome-do-usuario> -p
      ...
      ~~~
      * Tags:
      > `-u`: *se refere ao nome de usuário* `user` *sql que será inserido logo a seguir;*

      > `-p`: *se refere a senha de usuário* `password` *sql que será solicitada a seguir;*

      ~~~
      ...
      Enter password:
      Welcome to MySQL monitor (...)
      ~~~

    * Comandos do terminal dentro da instância do SQL:
        ~~~
        mysql> show databases;
        ~~~
        > `show databases`: *lista todos os bancos de dados;*
        > `drop database <banco-de-dados>`: *apaga o banco de dados selecionado;*

        ~~~
        mysql> use <banco-de-dados>;
        Database changed
        ~~~
        > `use <banco-de-dados>`: *define o banco de dados a ser utilizado;*

        ~~~
        mysql> show tables;
        Database changed
        ~~~
        > `show tables`: *lista todas as tabelas do banco de dados definido no comando `use`;*

        ~~~
        mysql> select * from <nome-da-tabela>
        ~~~
        > `select * from <nome-da-tabela>`: *mostra todas as informações (seletor `*`) contidas na tabela selecionada;*

  * MySQL dump:
    * No terminal, dentro do diretório onde o arquivo de backup será salvo:

        ~~~
        mysqldump -u <nome-do-usuario> -p <banco-de-dados> > <nome-do-arquivo.sql>
        ...
        ~~~
        > Recupera a estrutura, as tabelas e as informações do banco de dados selecionado;

        > `>`: sentido de fluxo das informações do banco de dados para o arquivo. Cria um arquivo de backup a partir de um banco de dados;

        ~~~
        mysqldump -u <nome-do-usuario> -p --no-data <banco-de-dados> > <nome-do-arquivo.sql>
        ...
        ~~~
        > `--no-data`: Recupera somente a estrutura e as tabelas sem as informações do banco de dados selecionado;

        > `>`: sentido de fluxo das informações do banco de dados para o arquivo. Cria um arquivo de backup a partir de um banco de dados;

  * Recuperar banco de dados através de um arquivo dump via terminal:
    * No terminal, dentro da pasta em que se encontra o arquivo de backup;
    * Via terminal, acessar o MySQL Workbench e listar todos os bancos de dados;
        ~~~
        mysql -u <nome-do-usuario> -p
        Enter password:
        Welcome to MySQL monitor (...)

        mysql> show databases;
        ~~~

    * Dentro da instância do MySQL:
      * Criar o banco de dados:
          ~~~
          mysql> create database <banco-de-dados>;
          Query OK, 1 row affected
          ...
          ~~~

      * Selecionar o banco de dados criado anteriormente:
          ~~~
          mysqldump -u <nome-do-usuario> -p <banco-de-dados> < <nome-do-arquivo.sql>
          Enter password:
          ...
          -- Dump completed on YYYY-MM-DD HH:MM:SS
          ...
          ~~~

        > `<`: sentido de fluxo das informações do arquivo para o banco de dados. Restaura um banco de dados a partir de um arquivo de backup;

----

### Clonar tabelas existentes:

* Útil para fazer cópias de segurança antes de alterar ou manipular uma tabela existente;

  ~~~sql
  -- Sintaxe:
  CREATE TABLE nome_para_nova_tabela LIKE tabela_a_ser_clonada;

  -- Exemplo:
  CREATE TABLE actor_clone LIKE sakila.actor;
  ~~~

  > Esse comando não copia os dados, **apenas a estrutura**;

  > Caso não especifique qual banco de dados utilizar, a nova tabela será inserida no banco que estiver ativo no momento da execução. Sendo assim, sempre especifique o banco de dados antes.

----

### View:

* Tabela temporária em um banco de dados criada a partir de uma query que permite:
  * Ter uma tabela que pode ser usada em relatórios;
  * Ter uma tabela para usar como base para montar novas queries;
  * Reduzir a necessidade de recriar queries utilizadas com frequência.

  ~~~sql
  -- Defina em qual banco a view será criada
  USE nome_do_banco_de_dados;

  -- Comando para criar a view
  CREATE VIEW nome_da_view AS query;

  CREATE VIEW top_10_customers AS
    SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
    FROM sakila.payment p
    INNER JOIN sakila.customer c ON p.customer_id = c.customer_id
    GROUP BY customer_id
    ORDER BY total_amount_spent DESC
    LIMIT 10;

  -- Comando para deletar uma view
  DROP VIEW nome_da_view;
  ~~~

----

### ALTER TABLE:

* Queries utilizadas na alteração de tabelas para implementar melhorias em bancos de dados;

~~~sql
USE sakila;
CREATE TABLE noticia(
    noticia_id INT PRIMARY KEY,
    titulo VARCHAR(100),
    historia VARCHAR(300)
) engine = InnoDB;
~~~
