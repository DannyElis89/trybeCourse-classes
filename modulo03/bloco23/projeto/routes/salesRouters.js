const express = require('express');

const router = express.Router();
const salesControllers = require('../controllers/salesControllers');

router.post('/', salesControllers.newSale);

router.get('/', salesControllers.getAll);
router.get('/:id', salesControllers.getById);
router.delete('/:id', salesControllers.deleteSale);
router.put('/:id', salesControllers.updateSale);

module.exports = router;
