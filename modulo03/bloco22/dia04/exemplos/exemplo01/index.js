const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

/* Crie suas rotas aqui */
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
