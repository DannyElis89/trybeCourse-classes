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
  * Identificador único (id): cada registro na tabela deve possuir uma, e somente uma, chave primária;
  * Coluna (chave simples) ou grupo de colunas (chave composta) usadas para identificar uma linha em uma tabela;
  * Não podem ser nulas (NOT NULL);
  * Normalmente, chaves primárias são incrementadas automaticamente pelo banco de dados, ou seja, não há necessidade de passarmos esse valor em um `INSERT`.
    * Entretanto, essa é uma opção configurada na criação da base de dados que não é obrigatória.
    * Nos casos em que o incremento automático não é definida, é preciso garantir que não haverão valores repetidos nessa coluna;
  * São as chaves para o relacionamento entre entidades ou tabelas da base de dados. Assim haverá na tabela relacionada uma referência a essa chave primária (que será, na tabela relacionada, a chave estrangeira).

2. **Foreign Key**:
  * Diz respeito a um relacionamento entre tabelas;
  * É um campo em uma tabela que faz referência a um campo que é chave primária em outra tabela;
  * Pode ser nula;
    * Embora não haja, efetivamente, nenhum problema das chaves estrangeiras aceitarem o valor null, tal característica pode gerar o que é chamado de registro órfão, isto é, um registro sem dados para um determinado relacionamento.
  * É possível ter mais de uma (ou nenhuma) em uma tabela.

------------------

### Normalização de banco de dados relacionais:
1. É uma técnica para organizar tabelas relacionadas no banco de dados com o objetivo de reduzir a redundância de dados;

2. Problemas com bancos de dados não normalizados:
  * Tabelas ocupando espaços desnecessários (dados duplicados);
  * Anomalias:
    * de inserção;
      * Erros de digitação;
    * de atualização;
      * atualizar os dados nas tabelas se torna custoso, pois seria necessário buscar onde as informações se encontram em cada tabela e atualizar 'uma a uma';
      * Erros de digitação;
    * de exclusão;
      * Não conseguir apagar os dados de forma satisfatória;
      * Perda completa de dados (menor segurança na manipulação dos bancos de dados);

3. Como a normalização resolve esse problema:
  * Separa os dados relacionados em suas próprias tabelas;
  * Integridade dos dados;
  * Redução de espaço gasto no banco de dados;

4. Formas de normalização:

  - **1ª Forma Normal**
    * As tabelas devem ser `escaláveis` (preparadas para grandes quantidades de dados);
    * As tabelas devem ser `extensíveis` (mudanças não devem quebrar a integridade dos dados);
    * Regras:
      * Colunas devem possuir *apenas um valor*;
      * Valores em uma coluna devem ser do *mesmo tipo de dados*;
      * Cada coluna deve possuir um *nome único*;
      * A ordem dos dados registrados em uma tabela não deve afetar a integridade dos dados.


  - **2ª Forma Normal**
    * A tabela deve estar na 1ª Forma Normal;
    * *A tabela não deve possuir dependências parciais*.
      * Uma dependência parcial pode ser considerada como qualquer coluna que não depende exclusivamente da chave primária da tabela para existir.
      * Uma coluna sem dependência parcial, precisa da *chave primária* para ser diferenciado de outros.


  - **3ª Forma Normal**

    * A tabela deve estar na 1ª e 2ª Formas Normais;
    * *A tabela não deve conter atributos (colunas) que não sejam dependentes exclusivamente da PK (chave primária)*.


