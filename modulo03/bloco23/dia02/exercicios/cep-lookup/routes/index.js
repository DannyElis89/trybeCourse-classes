const express = require('express');
const router = express.Router();
const Cep = require('../controllers/CepController');
const errorMiddleware = require('../middlewares/error')

router.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

router.get('/cep/:cep', Cep.findAddressByCep);
router.post('/cep', Cep.createCep);

router.use(errorMiddleware);

module.exports = router;
