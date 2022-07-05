const express = require('express');
const routes = express.Router(); // Faz o roteamento das rotas no backend e seleciona a solicitada;
const usersData = require('../data/users');

routes.get('/users', function (req, res) {
  res.status(200).json(usersData);
});
// cria rota do tipo GET chamada 'users', onde recebe uma requisição (req) e uma resposta (res)

routes.get('/users/search', function (req, res) {
  const { text } = req.query;

  if(!text) return res.status(400).json({message: 'Not Found'});

  const users = usersData.filter
  ((r) => r.name.toLowerCase().includes(text.toLocaleLowerCase())
    || r.username.toLowerCase().includes(text.toLocaleLowerCase())
  );

  if(!users) return res.status(404).json({message: 'User not Found'});

  res.status(200).json(users);
});

routes.get('/users/:id', function (req, res) {
  const { id } = req.params;

  const user = usersData.find((r) => r.id === parseInt(id));

  if(!user) return res.status(404).json({message: 'User not found'});

  res.status(200).json(user);
});

routes.post('/users', function (req, res) {
  const { id, name, email, phone, age, username } = req.body;

  usersData.push({ id, name, email, phone, age, username });

  res.status(201).json({message: 'Insert OK'})
});

routes.put('/users/:id', function (req, res) {
  const { id } = req.params;
  const { name, email, phone, age, username } = req.body;

  const userIndex = usersData.findIndex((user) => user.id === parseInt(id));

  if(userIndex === -1) return res.status(404).json({message: 'User not found'});

  usersData[userIndex] = {...usersData[userIndex], name, email, phone, age, username };

  res.status(204).end();
});

routes.delete('/users/:id', function (req, res) {
  const { id } = req.params;

  const userIndex = usersData.findIndex((user) => user.id === parseInt(id));

  if(userIndex === -1) return res.status(404).json({message: 'User not found'});

  usersData.splice(userIndex, 1);
  res.status(204).end();
});

module.exports = routes;
