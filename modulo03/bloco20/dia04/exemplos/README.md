# Bloco 20 - Introdução à SQL
## Dia 04: Manipulando tabelas

### Exemplos:


#### INSERT

1. Insira um novo funcionário na tabela sakila.staff.

    Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione Table Inspector. Clique na aba columns e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa exploração!

2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
4. Cadastre três categorias de uma vez só na tabela sakila.category.
5. Cadastre uma nova loja na tabela sakila.store.

-------------------

#### UPDATE

01. Atualize todas as linhas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".
02. Altere a linha da tabela categoria onde o valor da coluna x é igual "Sci-fi" para "Science Fiction".
03. Corrija para $25 o valor do aluguel da tabela filmes com duração maior que 100 minutos e que possuem classificação "G", "PG" ou "PG-13" e um custo de substituição maior que $20.
04. Agora, o aluguel dos filmes com duração entre 0 e 100 minutos passará a ser $10,00 e o aluguel dos filmes com duração acima de 100 minutos passará a ser de $20,00.
