# Bloco 21: Funções SQL, JOINs e Normalização

## Dia 03: Transformando ideias em um modelo de banco de dados
------------------

### Database Design - Como modelar um banco de dados:

1. Identificar as **entidades**, **atributos** e **relacionamentos** com base na descrição do problema:
    * *Entidades:*
      * *São uma representação de algo do mundo real dentro do banco de dados e que normalmente englobam toda uma ideia.*
      * *São armazenadas em formato de tabelas em um banco de dados.*

    * *Atributos:*
      * *Um atributo é tudo aquilo que pode ser usado para descrever algo.*
      * *Por exemplo, uma entidade pessoa pode ter nome, altura, peso e idade como atributos.*

    * *Relacionamentos:*
      * *Os relacionamentos servem para representar como uma entidade deve estar ligada com outra(s) no banco de dados.*
      * *Há três tipos de relacionamentos possíveis em um banco de dados, são eles:*
        * *Relacionamento Um para Um;*
        *  *Relacionamento Um para Muitos ou Muitos para Um;*
        * *Relacionamento Muitos para Muitos (N..N).*

    * *Por exemplo, a **entidade** `álbum`:*
      * *Possui os **atributos** `título` e `preço`;*
      * *E se relaciona com a **entidade** `artista`.*

2. Construir um **diagrama entidade-relacionamento** para representar as entidades encontradas no passo 1:
    * O diagrama serve como um guia para que você possa visualizar as entidades (tabelas) que irão se relacionar.

	![Modelagem de dados com o SQL Developer Data Modeler](http://arquivo.devmedia.com.br/REVISTAS/sql/imagens/140/1/4.png)

3. Criar um banco de dados para conter suas tabela:
    * Após analisar e criar um diagrama de como o seu banco de dados vai ser estruturado, você pode dar início a criação dele.
    * **Principais comandos:**
    ~~~sql
    -- Cria um banco de dados com o nome especificado.
    CREATE DATABASE nome_do_banco_de_dados;

    -- Sinônimo de CREATE DATABASE, também cria um banco de dados.
    CREATE SCHEMA nome_do_banco_de_dados;

    -- Verifica se o banco de dados ainda não existe.
    -- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
    -- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
    IF NOT EXISTS nome_do_banco_de_dados;

    -- Lista todos os bancos de dados existentes.
    SHOW DATABASES;

    -- Define o banco de dados ativo para uso no momento.
    USE nome_do_banco_de_dados;
    ~~~

4. Criar e relacionar tabelas tendo o diagrama do passo 2 como base:
    * Após criar seu banco de dados, você pode começar a criar e relacionar as tabelas de acordo com o diagrama.


------------------

### Principais tipos de dados em banco de dados:

1. **Booleanos:**
    * `Yes`/`No`;
    * `On`/`Off`;
    * `True`/`False`;
    * `0`/`1`;
    * *Default value:* `Null`;

2. **Caracteres:**
    * Tamanho fixo:
      * `CHAR(n)`:
        * *Permite inserir até uma quantidade de caracteres(n);*
        * *Sempre ocupa todo o espaço reservado na memória;*

    * Tamanho variável:
      * `VARCHAR(N)`:
        * *Permite inserir até uma quantidade definida (n);*
        * *Só ocupa espaço na memória de acordo com o tamanho preenchido da variável;*

3. **Numéricos:**
    * Valores exatos ou inteiros:
      * `TINYINT`:
          * `UNSIGNED`:
            * *Armazena somente valores positivos;*
            * *0 a 255;*
          * `SIGNED`:
            * *Armazena valores positivos e negativos;*
            * *-128 a 127;*

      * `SMALLINT`;
      * `MEDIUMINT`;
      * `INT`;
      * `BIGINT`;

    * Valores exatos comprecisão decimal:
      * `DECIMAL(x,y)`:
        * *Permite qualquer quantidade máxima de números (x) e sua precisão (y);*
        * *Ex: DECIMAL(5,2) = 199.99;*

      * `FLOAT`/`REAL`:
        * *Tem a precisão de uma casa decimal;*
        * *Limita apenas o número de casas decimais. A parte inteira do número não é limitada;*
        * *Ex: 10.9;*

      * `DOUBLE`:
        * *Tem a precisão de duas casas decimais;*
        * *Limita apenas o número de casas decimais. A parte inteira do número não é limitada;*
        * *Ex: 49.90;*

4. **Temporais:**
    * `DATA`: *Armazena valores no padrão YYYY-MM-DD;*
    * `TIME`: *Armazena valores no padrão HH:MM:SS;*
    * `YEAR`:
      * *Armazena somente o ano no padrão YYYY;*
      * *Somente entre 1901 e 2155;*

    * `DATETIME`:
      * *Junta o DATE e o TIME;*
      * *Padrão YYYY-MM-DD HH:MM:SS;*
      * *Faixa de valores: '1000-01-01 00:00:00' até '9999-12-31 23:59:59';*

    * `TIMESTAMP`: *Igual ao DATETIME, mas também opera com base em fuso horário, que pode ser definido no servidor;*

------------------

### Primary Key e Foreign Key:

1. **Primary Key**:
  * Identificador único (id);
  * Coluna (chave simples) ou grupo de colunas (chave composta) usadas para identificar uma linha em uma tabela;
