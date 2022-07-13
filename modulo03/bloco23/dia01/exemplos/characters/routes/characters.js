const express = require('express');
const router = express.Router();
const charactersModel = require('../models/charactersModel');
const validateCharactersMiddleware = require('../middlewares/charactersValidation')

router.get('/', async (req, res) => {
  try{
      const [rows] = await charactersModel.getAll();
      res.status(200).json(rows);
  } catch(err){
      console.log(err);
      res.status(500).json({ message: 'Erro interno'});
  }
});

router.get('/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const [rows] = await charactersModel.getById(id);
      res.status(200).json(rows);
  } catch(err){
      console.log(err);
      res.status(500).json({ message: 'Erro interno'});
  }
});

router.post('/', validateCharactersMiddleware, async (req, res) => {
  try{
    const { name, cartoon, year } = req.body;
    const result = await charactersModel.add(name, cartoon, year);
      res.status(201).json(result);
  } catch(err){
      console.log(err);
      res.status(500).json({ message: 'Erro interno'});
  }
});

router.put('/:id', async (req, res) => {
  try{
    const { name, cartoon, year } = req.body;
    const { id } = req.params;

    const result = await charactersModel.update(id, name, cartoon, year);
    res.status(201).json(result);

  } catch(err){
      console.log(err);
      res.status(500).json({ message: 'Erro interno'});
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const { id } = req.params;
    await charactersModel.remove(id);
    res.end();

  } catch(err){
      console.log(err);
      res.status(500).json({ message: 'Erro interno'});
  }
});

module.exports = router;
