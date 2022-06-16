# Bloco 21: Funções SQL, JOINs e Normalização
## Dia 03: Transformando ideias em um modelo de banco de dados
### Exercícios:

1. 🚀 Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:

  * Nome;
  * Espécie;
  * Sexo;
  * Idade;
  * Localização.

  Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal.
  Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.
  Siga os passos aprendidos no dia de hoje para modelar essa base de dados.

  * **Entidades, atributos e relacionamentos:**
    * `Regiao_zoo`:
      * `area_id` *(chave primária)*;
      * `area-name`;

    * `Gerentes`:
      * `gerente_id` *(chave primária)*;
      * `first_name`;
      * `last_name`;

    * `Cuidadores`:
      * `cuidador_id` *(chave primária)*;
      * `first_name`;
      * `last_name`;
      * `gerente_id` *(chave estrangeira)*;

    * `Especies`:
      * `especie_id` *(chave primária)*;
      * `especie_name`;
      * `area_id` *(chave estrangeira)*;

    * `Animais`:
      * `animal_id` *(chave primária)*;
      * `animal_name`;
      * `gender`;
      * `birth`;
      * `especie_id` *(chave estrangeira)*;

    * `Animal_cuidador` *(tabela intermediária)*:
      * `id` *(chave primária)*;
      * `animal_id` *(chave estrangeira)*;
      * `cuidador_id` *(chave estrangeira)*;

2. 🚀 Converta a tabela desnormalizada abaixo para a 1ª Forma Normal.

	![Tabela desnormalizada](https://assets.app.betrybe.com/back-end/sql/database-modeling/images/forma1_desnormalizada-c3a17e266c4503527c90b36012a603ac.png)

  * **Entidades, atributos e relacionamentos:**
    * `residencias`:
      * `residencia_id` *(chave primária)*;
      * `locador_name`;
      * `tipo`;
      * `logradouro`;
      * `numero`;
      * `complemento`;
      * `cidade`;
      * `estado`;

    * `inquilinos`:
      * `inquilino_id` *(chave primária)*;
      * `first_name`;
      * `last_name`;

    * `inquilino_residencia`:
      * `id` *(chave primária)*;
      * `inquilino_id` *(chave estrangeira)*;
      * `residencia_id` *(chave estrangeira)*;

3. 🚀 Converta a tabela desnormalizada abaixo (que já está nos padrões da 1ª Forma Normal) para a 2ª Forma Normal.

	![Tabela desnormalizada](https://assets.app.betrybe.com/back-end/sql/database-modeling/images/forma2_desnormalizada-89c8d3806e2ee316cd84cc71155de967.png)

  * **Entidades, atributos e relacionamentos:**
    * `criador`:
      * `criador_id` *(chave primária)*;
      * `first_name`;
      * `last_name`;
      * `birth`;

    * `universo`:
      * `universo_id` *(chave primária)*;
      * `universo_name`;

    * `liga`:
      * `liga_id` *(chave primária)*;
      * `liga_name`;
      * `universo_id` *(chave estrangeira)*;

    * `heroi`:
      * `heroi_id` *(chave primária)*;
      * `heroi_name`;
      * `liga_id` *(chave estrangeira)*;
      * `criador_id` *(chave estrangeira)*;

4. 🚀 Agora, converta essa outra tabela (que já está nos moldes das duas primeiras formas) para a 3ª Forma Normal..

	![Tabela desnormalizada](https://assets.app.betrybe.com/back-end/sql/database-modeling/images/forma3_desnormalizada-5af4f4b866f7a3dd9c70ff80b0c8155c.png)

  * **Entidades, atributos e relacionamentos:**
    * `generos`:
      * `genero_id` *(chave primária)*;
      * `genero`;

    * `filmes`:
      * `filme_id` *(chave primária)*;
      * `titulo`;
      * `classificacao`;
      * `duracao`;
      * `genero_id` *(chave estrangeira)*;
      * `valor_entrada`;
