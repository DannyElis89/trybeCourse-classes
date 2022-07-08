# Bloco 22 - Introdução ao desenvolvimento Web com Node.js
## Dia 5 - Express - Middlewares
### Exemplos:

  ~~~javascript
  // ...
  function validateName(req, res, next) {
    const { name } = req.body;
    if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

    next();
  };

  app.post('/recipes', validateName, function (req, res) {
    const { id, name, price } = req.body;
    recipes.push({ id, name, price});
    res.status(201).json({ message: 'Recipe created successfully!'});
  });

  app.put('/recipes/:id', validateName, function (req, res) {
    const { id } = req.params;
    const { name, price } = req.body;
    const recipesIndex = recipes.findIndex((r) => r.id === Number(id));

    if (recipesIndex === -1)
      return res.status(404).json({ message: 'Recipe not found!' });

    recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

    res.status(204).end();
  });
  // ...
  ~~~

1. 🚀 No código apresentado acima, remova a função `next()` do middleware validateName. Faça uma requisição para a rota `POST /recipes` com um body válido (contendo `id`, `name` e `price`). A requisição retornará algo? Por quê?
2. 🚀 Crie uma função `validatePrice` para validar se o preço foi enviado. O preço deve ser obrigatório, deve ser um número e não pode ser menor que 0. Aplique essa função como um middleware nas rotas `POST /recipes` e `PUT /recipes/:id`.
