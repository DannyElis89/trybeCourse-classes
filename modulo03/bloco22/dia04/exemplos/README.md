# Bloco 22 - Introdução ao desenvolvimento Web com Node.js
## Dia 04: Express - HTTP com Node.js
### Exemplos:

1. Crie uma array drinks com os seguintes objetos dentro dela e uma rota `GET /drinks` que retorna a lista de bebidas.

  ~~~javascript
  const drinks = [
    { id: 1, name: 'Refrigerante Lata', price: 5.0 },
    { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    { id: 3, name: 'Suco 300ml', price: 4.0 },
    { id: 4, name: 'Suco 1l', price: 10.0 },
    { id: 5, name: 'Cerveja Lata', price: 4.5 },
    { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
  ];
  ~~~
  * Resolução:
    ~~~javascript
    const express = require('express');
    const bodyParser = require('body-parser');

    const app = express();

    app.use(bodyParser.json());

    const drinks = [
      { id: 1, name: 'Refrigerante Lata', price: 5.0 },
      { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
      { id: 3, name: 'Suco 300ml', price: 4.0 },
      { id: 4, name: 'Suco 1l', price: 10.0 },
      { id: 5, name: 'Cerveja Lata', price: 4.5 },
      { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
    ];

    app.get('/drinks', function(req, res) {
      res.json(drinks);
    })

    app.listen(3000, () => console.log('ouvindo na porta 3000!'));
    ~~~


2. Modifique tanto a rota de bebidas como de receitas para retornar a lista ordenada pelo nome em ordem alfabética.

    ~~~javascript
    const express = require('express');
    const bodyParser = require('body-parser');

    const app = express();

    app.use(bodyParser.json());

    const drinks = [
      { id: 1, name: 'Refrigerante Lata', price: 5.0 },
      { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
      { id: 3, name: 'Suco 300ml', price: 4.0 },
      { id: 4, name: 'Suco 1l', price: 10.0 },
      { id: 5, name: 'Cerveja Lata', price: 4.5 },
      { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
    ];

    const drinks2 = drinks.sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });

    app.get('/drinks', function(req, res) {
      res.json(drinks2);
    })

    app.listen(3000, () => console.log('ouvindo na porta 3000!'));
    ~~~

3. Crie uma rota GET /drink/:id para retornar uma bebida pelo id.

    ~~~javascript
    // ...
    app.get('/drinks/:id', function (req, res) {
      const { id } = req.params;
      const drink = drinks.find((d) => d.id === Number(id));

      if (!drink) return res.status(404).json({ message: 'Drink not found!'});

      res.status(200).json(drink);
      // ...
    ~~~

4. Modifique o código da rota para que ela receba um terceiro parâmetro através de query string com o atributo `minPrice` e modifique o filter para trazer apenas os receitas onde o valor da receita seja maior ou igual ao o valor enviado como parâmetro, mantendo os filtros anteriores.
5. Implemente uma rota /drinks/search que permita pesquisar pelo atributo name usando query string.

    ~~~javascript
    // Exemplos 04 e 05:
    // ...
    app.get('/drinks/search', function (req, res) {
      const { name, maxPrice, minPrice } = req.query;
      const filteredDrinks = drinks.filter((d) => d.name.includes(name) && d.price < Number(maxPrice) && d.price >= Number(minPrice));
      res.status(200).json(filteredDrinks);
    });
    // ...
    ~~~


