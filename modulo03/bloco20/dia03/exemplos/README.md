# Bloco 20 - Introdução à SQL
## Dia 03: Filtrando dados de forma específica
### Exemplos:

| Nível 	| Operadores                                                                                                                                                                                                                 	|
|-------	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| 1     	| ~ (Não de bit a bit)                                                                                                                                                                                                       	|
| 2     	| * (Multiplicação)<br>/ (Divisão)<br>% (Módulo)                                                                                                                                                                             	|
| 3     	| + (Positivo)<br>– (Negativo)<br>+ (Adição)<br>+ (Concatenação)<br>– (Subtração)<br>& (AND bit a bit)<br>^ (OR exclusivo bit a bit)<br>\| (OR bit a bit)                                                                    	|
| 4     	| Operadores de comparação:<br><br>= (igual a)<br>> (maior que)<br>< (menor que)<br>>= (maior ou igual a)<br><= (menor ou igual a)<br><> (diferente de)<br>!= (diferente de)<br>!> (Não é maior que)<br>!< (Não é menor que) 	|
| 5     	| NOT                                                                                                                                                                                                                        	|
| 6     	| AND                                                                                                                                                                                                                        	|
| 7     	| ALL, ANY, BETWEEN, IN, LIKE, OR, SOME                                                                                                                                                                                      	|
| 8     	| = (Atribuição)                                                                                                                                                                                                             	|

### Para fixar - 01:
A tabela a seguir é um guia de como a classificação indicativa é usada no banco de dados sakila. Consulte-a ao fazer os desafios propostos.

    * G = permitido para todos
    * PG = permitido para crianças menores de 13 anos
    * PG-13 = permitido para pessoas com mais de 13 anos
    * R = permitido para pessoas com mais de 17 anos
    * NC-17 = permitido apenas para adultos

Entre no banco de dados sakila e siga as instruções (e guarde as queries para conferir posteriormente):

1. Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org. As informações podem ser encontradas na tabela customer
2. Precisamos de um relatório dos nomes dos clientes, em ordem alfabética, que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2, e não inclua o cliente KENNETH no resultado. As informações podem ser encontradas na tabela customer
3. O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição (replacement_cost), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film
4. Quantos clientes estão ativos e na loja 1? As informações podem ser encontradas na tabela customer
5. Mostre todos os detalhes dos clientes que não estão ativos na loja 1. As informações podem ser encontradas na tabela customer
6. Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film

--------------------------------------------

Você vai se deparar também com casos em que você só tem parte de uma informação, ou em que precisa criar queries mais dinâmicas. Para esses casos, temos o LIKE. Como assim? É o que veremos a seguir.

O LIKE é usado para buscar por meio de uma sequência específica de caracteres, como no exemplo acima. Além disso, dois "curingas", ou modificadores, são normalmente usados com o LIKE:

    % - O sinal de percentual, que pode representar zero, um ou múltiplos caracteres
    _ - O underscore (às vezes chamado de underline, no Brasil), que representa um único caractere

--------------------------------------------

### Para fixar - 02:

Para consolidar esse conhecimento, brinque com os resultados que serão encontrados usando os comandos acima e tente criar suas próprias condições. Depois de ter praticado um pouco com eles, tente encontrar as seguintes informações:

01. Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
02. Mostre todos os detalhes dos filmes cujas descrições finalizam com china.
03. Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord.
04. Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon.
05. Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary.
06. Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.
07. Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.


--------------------------------------------

### Para fixar - 03:

1. Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.
2. Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.
3. Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano.
4. Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.
5. Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13. Os resultados devem estar ordenados por título.

        P.S. As classificações podem ser verificadas acima, na seção "Alavancando o poder dos principais comparadores lógicos".

--------------------------------------------

### Para fixar - 04:

1. Quantos pagamentos temos com a data de retorno 2005-05-25? Há múltiplas maneiras possíveis de encontrar a resposta.
2. Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005?
3. Usando a tabela rental, extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.
4. Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas.
