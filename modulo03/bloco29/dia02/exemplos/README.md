# Bloco 29 - Introdução ao MongoDB
## Dia 02: Filter Operators

### Operadores de comparação:
* `$lt`: less than, menor que, <;
* `$lte`: less than or equal, menor ou igual a, <=;
* `$gt`: greater than, maior que, >;
* `$gte`: greater than or equal, maior ou igual a, >=;
* `$eq`: equal, igual a, =;
* `$ne`: not equal, diferente de, !=, <>;
* `$in`: in, dentro de;
* `$nin`: not in, não está dentro de;

### Operadores lógicos:
  * `$and`: and, se todas as condições forem verdadeiras retorna true;
  * `$or`: or, se apenas uma condição for verdadeira retorna true;

### Filtros avançados:
  * `$not`: not, inverte o resultado da expressão;
    * Ex:
      ~~~javascript
      { campo: { $not: { <operador ou expressão> } } }

      db.inventory.find({ price: { $not: { $gt: 1.99 } } });
      ~~~
      * *Essa consulta seleciona todos os documentos na coleção inventory em que o valor do atributo price é menor ou igual a 1.99 (em outras palavras, não é maior que 1.99), ou em que o atributo price não existe.*

  * `$nor`: not or, semelhante ao or, porém trabaha com a condição false;
  * `$exists`: exists, verifica a existência de um atributo;
    * Ex:
      ~~~javascript
      { campo: { $exists: <boolean> } }

      db.inventory.find({
        qty: {
          $exists: true,
          $nin: [ 5, 15 ]
        },
      });
      ~~~

### Métodos:
  * `sort()`: sort, ordenar;
  * `deleteOne()`: remove apenas um documento, que deve satisfazer o critério de seleção;
  * `deleteMany()`: remove todos os documentos que satisfaçam o critério de seleção;
