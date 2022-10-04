# Bloco 29: Introdução ao Mongo DB
## Dia 01: Introdução - NoSQL & MongoDB - Introdução

-----------

### Bancos de Dados:

* Uma vez conectado a uma instância do `MongoDB` através do `MongoDB Shell`, você só precisa especificar o contexto em que essa escrita acontecerá. Nesse caso, o contexto é o nome do banco de dados que você quer criar:
  ~~~shell
  use nomeDoBanco
  db.nomeDaColecao.insertOne({ x: 1 })
  ~~~

-----------

### Coleções:
* Criando uma coleção:
  * Como você viu, se uma coleção não existe, o `MongoDB` cria essa coleção no momento do primeiro `insert`.

    ~~~shell
    use nomeDoBanco
    db.nomeDaColecao1.insertOne({ x: 1 })
    ~~~

* Criação explícita:
  * Você também pode utilizar o método `db.createCollection()` para criar uma coleção e especificar uma série de parâmetros, como o tamanho máximo do documento ou as regras de validação para os documentos.
  * Se você não quiser especificar algum desses parâmetros, o uso do método para criação não é necessário. O exemplo abaixo cria uma coleção, especificando sua collation.

    ~~~shell
    use nomeDoBanco
    db.createCollection( "nomeDaColecao", { collation: { locale: "pt" } } );
    ~~~

-----------

### Documentos:
* São equivalentes aos registros ou linhas de uma tabela nos bancos de dados relacionais;
* Cada atributo (campo) é equivalente a uma coluna de uma linha da tabela;
* A diferença é que documentos podem conter estruturas mais ricas, diferentes entre documentos e armazenar muito mais informações do que você consegue em uma "linha simples" de uma tabela relacional.

-----------

### Insert:
* **`insertOne()`**:
  * *Agora, crie um documento na coleção `products`, no banco de dados `sample`, com os seguintes atributos e valores:*
  ~~~json
    {
      "productName": "Caixa",
      "price": 20
    }
  ~~~

  ~~~shell
  use sample
  db.products.insertOne({ "_id": 1,  "productName": "Caixa", "price": 20 })
  ~~~

* **`insertMany()`**:
  * *Insira mais três documentos na coleção `products` em uma única operação:*
  ~~~json
  [
      { "productName": "Lapis", "stock": 10, "price": 20,"status":"A"},
      { "productName": "Tesoura", "price": 5, "status": "B" },
      { "productName": "Borracha", "price": 15, "status": "A" }
  ]
  ~~~

  ~~~shell
  db.products.insertMany([{ "productName": "Lapis", "stock": 10, "price": 20,"status":"A"}, { "productName": "Tesoura", "price": 5, "status": "B" }, { "productName": "Borracha", "price": 15, "status": "A" }])
  ~~~

-----------

### Método find():
* Seleciona documentos de uma coleção e retorna um cursor com esses docs;
* Recebe dois parâmetros: `db.collection.find(query, projection)`:

  * *`query` (opcional)*:
    * *Especifica os filtros da seleção usando os `query operators`;*
    * *Para retornar todos os docs de uma coleção, é só omitir esse parâmetro ou passar um doc vazio `({})`;*

  * *`projection` (opcional)*:
    * *Especifica quais atributos serão retornados nos documentos selecionados pelo parâmetro query;*
    * *Para retornar todos os atributos desses documentos, é só omitir esse parâmetro;*


#### Projeção (projection)
* Determina quais atributos serão retornados dos documentos que atendam aos critérios de filtro:
  ~~~
  { "atributo1": <valor>, "atributo2": <valor> ... }
  ~~~
* O `<valor>` pode ser:
  * `1` ou `true` para incluir um campo nos documentos retornados;
  * `0` ou `false` para excluir um campo;
  * Uma expressão usando `Projection Operators`:
    * `$eq`: Corresponde a valores que são iguais a um valor especificado.
    * `$gt`: corresponde a valores maiores que um valor especificado.
    * `$gte`: Corresponde a valores maiores ou iguais a um valor especificado.
    * `$in`: corresponde a qualquer um dos valores especificados em um array.
    * `$lt`: Corresponde a valores menores que um valor especificado.
    * `$lte`: Corresponde a valores menores ou iguais a um valor especificado.
    * `$ne`: corresponde a todos os valores que não são iguais a um valor especificado.
    * `$nin`: não corresponde a nenhum dos valores especificados em um array.


-----------

### Exemplos:

1. Agora, crie um documento na coleção products, no banco de dados `sample`, com os seguintes atributos e valores:
  ~~~json
  {
      "productName": "Caixa",
      "price": 20
  }
  ~~~

2. Insira mais três documentos na coleção `products` em uma única operação:
  ~~~json
  [
    { "productName": "Lapis", "stock": 10, "price": 20,"status":"A"},
    { "productName": "Tesoura", "price": 5, "status": "B" },
    { "productName": "Borracha", "price": 15, "status": "A" }
  ]
  ~~~

