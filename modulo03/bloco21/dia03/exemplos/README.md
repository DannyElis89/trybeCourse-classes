# Bloco 21: Funções SQL, JOINs e Normalização

## Dia 03: Transformando ideias em um modelo de banco de dados

### Exemplos:

#### Exercícios de fixação - normalização de dados

1. 🚀 Normalize a tabela a seguir para a 1ª Forma Normal.
2. 🚀 Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior, transforme-a agora na 2ª Forma Normal.


| funcionario_id | nome     | sobrenome | contato                  | contato         | data_cadastro          | setor                 |
|:--------------:|:---------|:----------|:-------------------------|:---------------:|:----------------------:|:---------------------:|
| 12             | Joseph   | Rodrigues | jo@gmail.com             | (35)998552-1445 | 2020-05-05 08:50:25    | Administração, Vendas |
| 13             | André    | Freeman   | andre1990@gmail.com      | (47)99522-4996  | 5 de Fevereiro de 2020 | Operacional           |
| 14             | Cíntia   | Duval     | cindy@outlook.com        | (33)99855-4669  | 2020-05-05 10:55:35    | Estratégico, Vendas   |
| 15             | Fernanda | Mendes    | fernandamendes@yahoo.com | (33)99200-1556  | 2020-05-05 11:45:40    | Marketing             |

  * Dados pessoais:

      | id_pessoal | nome     | sobrenome |
      |:----------:|:---------|:----------|
      |      1     | Joseph   | Rodrigues |
      |      2     | André    | Freeman   |
      |      3     | Cíntia   | Duval     |
      |      4     | Fernanda | Mendes    |

  * Informações pessoais de contato: telefone

      | id_telefone | id_pessoal | DDD | Telefone  |
      |:-----------:|:----------:|:---:|:---------:|
      |      1      | 12         | 35  | 985521445 |
      |      2      | 13         | 47  | 995224996 |
      |      3      | 14         | 33  | 998554669 |
      |      4      | 15         | 33  | 992001556 |

  * Informações pessoais de contato: e-mail

      | id_e-mail | id_pessoal | E-mail                   |
      |:---------:|:----------:|:-------------------------|
      |      1    | 12         | jo@gmail.com             |
      |      2    | 13         | andre1990@gmail.com      |
      |      3    | 14         | cindy@outlook.com        |
      |      4    | 15         | fernandamendes@yahoo.com |

  * Dados da empresa:

      | id_setor | nome_setor    |
      |:--------:|:-------------:|
      |     1    | Administração |
      |     2    | Estratégico   |
      |     3    | Marketing     |
      |     4    | Operacional   |
      |     5    | Vendas        |


  * Dados profissionais:

      | id_pessoal |funcionario_id |	data_cadastro       |
      |:----------:|:-------------:|:--------------------:|
      |      1     |      12       |	2020-05-05 08:50:25 |
      |      2     |      13       |	2020-02-05 10:00:00 |
      |      3     |      14       |	2020-05-05 10:55:35 |
      |      4     |      15       |	2020-05-05 11:45:40 |

  * Dados do setor-funcionários:

      | id | funcionario_id | id_setor |
      |:--:|:--------------:|:--------:|
      |  1 |        12      |    1     |
      |  2 |        12      |    5     |
      |  3 |        13      |    4     |
      |  4 |        14      |    2     |
      |  5 |        14      |    5     |
      |  6 |        15      |    3     |

3. 🚀 Monte uma query que:
    * Crie um banco de dados chamado `normalization`;
    * Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
    * Popule todas as tabelas com os dados fornecidos nos exercícios.

            arquivo normalization.sql
