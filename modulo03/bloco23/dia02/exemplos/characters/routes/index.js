const express = require('express');
const router = express.Router();

const charactersController = require('../controllers/charactersController');
const creatorsController = require('../controllers/creatorsController');

router.use('/characters', charactersController);
router.use('/creators', creatorsController);

module.exports = router;
