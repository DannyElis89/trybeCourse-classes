# Bloco 21: Funções SQL, JOINs e Normalização
## Dia 01: Funções mais usadas no SQL

### Para fixar:

#### Manipulação de strings:
  1. Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.

  2. Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.

  3. Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.

  4. Extraia e retorne apenas a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.

  5. Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.

#### Condicionais:
  1. Usando o IF na tabela sakila.film, exiba o id do filme, o título e uma coluna extra chamada 'conheço o filme?', em que deve-se avaliar se o nome do filme é 'ACE GOLDFINGER'. Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.

  2. Usando o CASE na tabela sakila.film, exiba o título, a classificação indicativa (rating) e uma coluna extra que vamos chamar de 'público-alvo' em que colocaremos a classificação do filme de acordo com as seguintes siglas:

          G: "Livre para todos";
          PG: "Não recomendado para menores de 10 anos";
          PG-13: "Não recomendado para menores de 13 anos";
          R: "Não recomendado para menores de 17 anos";
          Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".

#### Funções matemáticas:

  ##### Desafios com DIV e MOD:
  1. Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar', onde ela pode dizer 'Par' ou 'Ímpar'.

  2. Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?

  3. Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?

  ##### Desafios com arredondamento de valores, exponenciação e raiz quadrada e geração de valores aleatórios:
  1. Monte uma query que gere um valor entre 15 e 20.

  2. Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.

  3. Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?

  4. Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?

#### Trabalhando com datas:
1. Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
2. Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
