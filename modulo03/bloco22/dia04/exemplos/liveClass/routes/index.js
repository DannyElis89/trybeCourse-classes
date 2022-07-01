const express = require('express');
const routes = express.Router(); // Faz o roteamento das rotas no backend e seleciona a solicitada;
const usersData = require('../data/users');

routes.get('/users', function (req, res) {
  res.status(200).json(usersData);
});
// cria rota do tipo GET chamada 'users', onde recebe uma requisição (req) e uma resposta (res)

module.exports = routes;
