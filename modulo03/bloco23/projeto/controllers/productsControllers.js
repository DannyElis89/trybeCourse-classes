const productsServices = require('../services/productsServices');

const getProducts = async (req, res) => {
  try {
    const [rows] = await productsServices.getAll();
    return res.status(200).json(rows);
  } catch (err) {
    // console.log(err);
    return res.status(500).json({ message: 'Erro interno' });
  }
};

const getProductById = async (req, res) => {
  // console.log('========================');
  const { id } = req.params;
  const [rows] = await productsServices.getById(id);

  if (!rows || rows.length === 0) {
    return res.status(404).json({ message: 'Product not found' });
  }
  // console.log(rows[0]);
  // console.log('res.status(200).json(rows[0])', res.status(200).json(rows[0]));
  return res.status(200).json(rows[0]);
};

const postProduct = async (req, res) => {
  const { name } = req.body;
  const result = await productsServices.add(name);

  return res.status(201).json(result);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const resultProduct = await productsServices.updateProduct(id, name);

  if (resultProduct.result) {
    const { code, message } = resultProduct.result;
    return res.status(code).json({ message });
  }

  return res.status(200).json(resultProduct[0]);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  // console.log('id de deleteProduct em productsControllers: ', id);

  const deleteProductById = await productsServices.deleteProduct(id);
  // console.log('deleteProductById de deleteProduct em productsControllers: ', deleteProductById);

  if (deleteProductById.result) {
    const { code, message } = deleteProductById.result;
    return res.status(code).json({ message });
  }

  return res.status(204).json(deleteProductById[0]);
};

const searchProduct = async (req, res) => {
  const { q } = req.query;
  // console.log('q em productsControllers: ', q);
  const result = await productsServices.searchProduct(q);
  // console.log('result em productsControllers: ', result);

  return res.status(200).json(result);
};

module.exports = {
  getProducts,
  getProductById,
  postProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
