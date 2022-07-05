const express = require('express');
const routes = express.Router();
const { getSimpsons, setSimpsons } = require('../fs-utils');
const simpsonsFile = require('../simpsons.json');

// exercicio 01:
routes.get('/ping', function (req, res) {
  res.status(200).json({ message: 'pong' })
});

// exercicio 02:
routes.post('/hello', function(req, res) {
  const {name} = req.body;

  return res.status(200).json({ message: `Hello, ${name}!`});
});

// exercicio 03:
routes.post('/greetings', function(req, res) {
  const {name, age} = req.body;

  age > 17
    ? res.status(200).json({ message: `Hello, ${name}!`})
    : res.status(401).json({ message: 'Unauthorized'});
});

// exercicio 04:
routes.put('/users/:name/:age', (req, res) => {
  const {name, age} = req.body;

  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});

// exercicio 06:
routes.get('/simpsons', async function(req, res) {
  try {
    const simpsons = await getSimpsons();
    return res.status(200).json(simpsons);
  } catch(err) {
    return res.status(500).end();
  }
});

routes.get('/simpsons/:id', async function(req, res) {
  const { id } = req.params;

  try {
    const simpsons = await getSimpsons();
    const simpson = simpsons.find((person) => person.id === id);

    if(!simpson) return res.status(404).json({message: 'simpson not found'});

    return res.status(200).json(simpson);
  } catch(error) {
    return res.status(500).end();
  }
});

routes.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;
    const simpsons = await getSimpsons();

    if(simpsons.some((char) => char.id === id)) return res.status(409).json({ message: 'id already exists' });

    simpsons.push({ id, name });
    await setSimpsons(simpsons);

    return res.status(204).end();

  } catch (error) {
    return res.status(500).end();
  };
});

module.exports = routes;
