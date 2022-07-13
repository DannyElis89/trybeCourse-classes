const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const userValidation = require('../middleware/userValidation')

router.post('/', userValidation, async (req, res) => {
  try{
    const { firstName, lastName, email, password } = req.body;
    const result = await userModel.createUser(firstName, lastName, email, password);
    console.log(result)

    res.status(201).json(result);

  } catch(err) {
    console.log(err);
    res.status(500).json({ message: 'Erro interno'});
  }
});

router.get('/', async (_req, res) => {
  try{
    const [rows] = await userModel.getAll() || [];
    res.status(200).json(rows);
  } catch(err) {
    console.log(err);
    res.status(500).json({ message: 'Erro interno'});
  }
});

module.exports = router;
