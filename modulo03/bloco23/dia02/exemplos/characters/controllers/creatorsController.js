const express = require('express');
const middlewares = require('../middlewares');
const router = express.Router();
const creatorsService = require('../services/creatorsService');

router.get('/all', async (req, res) => {
  console.log('teste')
  // Usando try-catch, uma outra forma de tratar erro qdo não o middleware de erro
  try {
      const [rows] = await creatorsService.getAllTables() // acessa camada de model para trazer os characters do db
      res.status(200).json(rows);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Rota para pegar todos characters
router.get('/', async (req, res) => {
    // Usando try-catch, uma outra forma de tratar erro qdo não o middleware de erro
    try {
        const [rows] = await creatorsService.getCreators() // acessa camada de model para trazer os characters do db
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para pegar characters por id
router.get('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const [rows] = await creatorsService.getCreators(id); // acessa a camada de model para trazer dados do db
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', middlewares.creatorsValidation, async (req, res) => {
    try {
        const result = await creatorsService.createCreators(req.body);  // acessa a camada de model para salvar dados do db
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await creatorsService.updateCreator(id, req.body);

      if (result) {
        return res.status(201).json(result);
      }
      res.status(404).json({ message: `Creator ID ${id} não encontrado` });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;

      await creatorsService.deleteCreator(id);

      res.status(200).end();
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  });

module.exports = router;
