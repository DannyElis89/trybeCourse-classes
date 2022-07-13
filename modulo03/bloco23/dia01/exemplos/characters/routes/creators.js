const express = require('express');
const validateCreatorsMiddleware = require('../middlewares/creatorsValidation');
const router = express.Router();
const creatorsModel = require('../models/creatorsModel');

router.get('/', async (req, res)=> {
  try{
    const [rows] = await creatorsModel.getAll();
    res.status(200).json(rows);
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: 'Erro interno'});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await creatorsModel.getById(id);
      res.status(200).json(rows);
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: 'Erro interno'});
  };
});

router.post('/', validateCreatorsMiddleware, async (req, res) => {
  try {
    const { name, birth_date, id_characters } = req.body;
    const result = await creatorsModel.add(name, birth_date, id_characters);
      res.status(201).json(result);
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: 'Erro interno'});
  };
});

router.put('/:id', async (req, res) => {
  try {
    const { name, birth_date, id_characters } = req.body;
    const { id } = req.params;

    const result = await creatorsModel.update(id, name, birth_date, id_characters);
      res.status(201).json(result);
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: 'Erro interno'});
  };
});

router.delete('/:id', async (req, res) => {
  try{
    const { id } = req.params;
    await creatorsModel.remove(id);
    res.end();

  } catch(err){
      console.log(err);
      res.status(500).json({ message: 'Erro interno'});
  }
});

module.exports = router;
