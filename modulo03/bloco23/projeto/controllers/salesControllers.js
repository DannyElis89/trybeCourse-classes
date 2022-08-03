const salesServices = require('../services/salesServices');
const salesValidate = require('../middlewares/salesValidate');

const newSale = async (req, res) => {
  const products = req.body;

  const validateSales = await salesValidate.validateSales(products);
  const validaProducts = await salesValidate.validaProducts(products);

  if (validateSales.result) {
    const { code, message } = validateSales.result;
    return res.status(code).json({ message });
  }

  if (validaProducts.result) {
    const { code, message } = validaProducts.result;
    return res.status(code).json({ message });
  }

  const response = await salesServices.addProductsForSale(products);
  return res.status(201).json(response);
};

const getAll = async (req, res) => {
  try {
    const result = await salesServices.getAll();
    // console.log('Em getAll de salesControllers, result: ', result);

    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: 'Sale not found' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await salesServices.getById(id);

    if (result.code) {
      return res.status(result.code).json({ message: result.message });
    }

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error' });
  }
};

const deleteSale = async (req, res) => {
  const { id } = req.params;

  const deleteSaleById = await salesServices.deleteSale(id);

    if (deleteSaleById.result) {
    const { code, message } = deleteSaleById.result;
    return res.status(code).json({ message });
  }

  return res.status(204).json(deleteSaleById[0]);
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const sales = req.body;

  const validateSales = await salesValidate.validateSales(sales);
  if (validateSales.result) {
    return res.status(validateSales.result.code).json({ message: validateSales.result.message });
  }

  const validaProducts = await salesValidate.validaProducts(sales);
  if (validaProducts.result) {
    return res.status(validaProducts.result.code).json({ message: validaProducts.result.message });
  }

  const getSalesById = await salesServices.updateSale(id, sales);

  if (getSalesById.result) {
    return res.status(getSalesById.result.code).json({ message: getSalesById.result.message });
  }

  return res.status(200).json(getSalesById);
};

module.exports = {
  newSale,
  getAll,
  getById,
  deleteSale,
  updateSale,
};
