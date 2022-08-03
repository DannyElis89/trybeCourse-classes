const productsModel = require('../models/productsModel');

const getAll = () => productsModel.getAll();

const getById = async (id) => {
  const product = await productsModel.getById(id);
  // console.log(product);
  return product;
};

const add = async (name) => {
  const product = await productsModel.add(name);
  return product;
};

const updateProduct = async (id, name) => {
  if (!name) { return { result: { code: 400, message: '"name" is required' } }; }

  if (name.length < 5) {
    return {
      result: { code: 422, message: '"name" length must be at least 5 characters long' },
    };
  }

  const resultProduct = await productsModel.updateProduct({ id, name });

  if (resultProduct.length < 1) {
    return {
      result: {
        code: 404,
        message: 'Product not found',
      },
    };
  }

  return resultProduct;
};

const deleteProduct = async (id) => {
  const productById = await productsModel.getById(id);

  // console.log('productById[0] de deleteProduct em productsServices: ', productById[0]);

  // console.log('======================');
  // console.log('productServices', productById[0]);

  if (productById[0].length < 1) {
    return { result: {
      code: 404,
      message: 'Product not found',
    } };
  }

  const deleteProductById = await productsModel.deleteProduct(id);

  // console.log('deleteProductById de deleteProduct em productsServices: ', deleteProductById);

  return deleteProductById;
};

const searchProduct = async (name) => {
  const result = await productsModel.searchProduct(name);
  // console.log('result em productsServices: ', result);

  // if (!result) return [];
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  updateProduct,
  deleteProduct,
  searchProduct,
};
