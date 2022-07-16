const express = require('express');
const router = express.Router();

// const charactersController = require('../controllers/charactersController');
// const creatorsController = require('../controllers/creatorsController');

// router.use('/characters', charactersController);
// router.use('/creators', creatorsController);

router.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});



module.exports = router;
