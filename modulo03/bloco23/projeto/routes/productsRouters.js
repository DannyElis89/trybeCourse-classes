const express = require('express');

const router = express.Router();
const productsControllers = require('../controllers/productsControllers');
const middlewares = require('../middlewares');

router.get('/search', productsControllers.searchProduct);
router.get('/', productsControllers.getProducts);
router.get('/:id', productsControllers.getProductById);
router.post('/', middlewares.productsValidate, productsControllers.postProduct);
router.put('/:id', productsControllers.updateProduct);
router.delete('/:id', productsControllers.deleteProduct);

module.exports = router;
