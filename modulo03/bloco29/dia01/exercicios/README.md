# Bloco 29: Introdução ao Mongo DB
## Dia 01: Introdução - NoSQL & MongoDB - Introdução

-----------

### Exercícios:
**Utilizando a coleção bios, construa queries para retornar os seguintes itens:**
1. Retorne o documento com o `_id` igual a 8.

2. Retorne o documento com o `_id` igual a 8, mas só exiba os atributos: `_id` e `name`.

3. Retorne apenas os atributos `name` e `birth` do documento com o `_id` igual a 8.

4. Retorne todos os documentos em que o atributo `name.first` seja igual a John, utilizando o método `pretty()`.

5. Retorne os 3 primeiros documentos da coleção `bios` utilizando o método `pretty()`.

6. Retorne 2 documentos da coleção `bios` pulando os 5 primeiros documentos.

7. Retorne a quantidade de documentos da coleção `books`.

8. Conte quantos livros existem com o `status = "PUBLISH"`.

9. Exiba os atributos `title`, `isbn` e `pageCount` dos 3 primeiros livros. NÃO retorne o atributo `_id`.

10. Pule 5 documentos e exiba os atributos `_id`, `title`, `authors` e `status` dos livros com o `status = "MEAP"`, limitando-se a 10 documentos.
