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
