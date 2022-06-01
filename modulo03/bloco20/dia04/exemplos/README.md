# Bloco 20 - Introdução à SQL
## Dia 04: Manipulando tabelas

---------
#### Informação importante sobre os tipos de aspas:
* Backticks ou crase (``): são usadas para identificar nome de tabelas e colunas. São necessárias apenas quando o identificador for uma palavra reservada do MySQL, ou quando o nome da tabela ou coluna contiver espaços em branco.
* Aspas simples (''): devem ser usadas em valores do tipo string. Aspas simples são aceitas na maioria dos Sistemas de Gerenciamento de Banco de Dados, sendo assim, é preferível usar aspas simples no lugar das aspas duplas.

---------

### INSERT

* A sintaxe para inserir dados em uma tabela é a seguinte:
~~~sql
INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');
~~~


* Inserindo várias linhas de uma vez:
~~~sql
INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
('valor_1','valor_2'),
('valor_3','valor_4'),
('valor_5','valor_6');
~~~


* Ignorando linhas existentes:

![Tabela `pessoas`](https://assets.app.betrybe.com/back-end/sql/images/SimpleTableData1-e74f5b1a4c4a1bef95d8225b33ddf116.png)

~~~sql
INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');

-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
-- Porém os dados corretos foram inseridos com sucesso.
SELECT * FROM pessoas;
~~~
      IMPORTANTE: Lembre-se de que o INSERT IGNORE vai pular os outros erros silenciosamente também.


* Inserindo valores em colunas com auto_increment

      A coluna que possui auto_increment é omitida no INSERT, uma vez que o valor já é gerado automaticamente:

~~~sql
INSERT INTO sakila.actor (first_name, last_name)
VALUES('Marcelo','Santos');
~~~
![Resultado do `INSERT` em `sakila.actor`](https://assets.app.betrybe.com/back-end/sql/images/SimpleTableData3-4071b0ab46c7cfd87011352aa3a3fd97.png)


---------

### INSERT SELECT (Inserindo dados de uma outra tabela)

~~~sql
INSERT INTO tabelaA (coluna1, coluna2)
    SELECT tabelaB.coluna1, tabelaB.coluna2
    FROM tabelaB
    WHERE tabelaB.nome_da_coluna <> 'algumValor'
    ORDER BY tabelaB.coluna_de_ordenacao;
~~~

---------
### Exemplos:

1. Insira um novo funcionário na tabela sakila.staff.

    Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione Table Inspector. Clique na aba columns e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa exploração!

2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
4. Cadastre três categorias de uma vez só na tabela sakila.category.
5. Cadastre uma nova loja na tabela sakila.store.

