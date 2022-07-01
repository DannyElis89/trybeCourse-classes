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

console.log(drinks);

// const drinks2 = drinks.sort((a, b) => {
//   return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
// });

// console.log(drinks2);

app.get('/drinks', function(req, res) {
  res.json(drinks);
});

// app.get('/drinks2', function(req, res) {
//   res.json(drinks2);
// });

app.get('/drinks/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredDrinks = drinks.filter(
    (d) => d.name.includes(name)
      && d.price < Number(maxPrice)
      && d.price >= Number(minPrice)
  );

  res.status(200).json(filteredDrinks);
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === Number(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!'});

  res.status(200).json(drink);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
