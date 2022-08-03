const productsModel = require('../models/productsModel');

const validateSales = async (productsSales) => {
  // console.log(`productsSales: ${productsSales}`);

  if (productsSales.some(({ quantity }) => quantity <= 0)) {
    return {
      result: { code: 422, message: '"quantity" must be greater than or equal to 1' },
    };
  }

  if (productsSales.some((sale) => !sale.productId)) {
    return { result: { code: 400, message: '"productId" is required' },
    };
  }

  if (productsSales.some((sale) => !sale.quantity)) {
    return { result: { code: 400, message: '"quantity" is required' },
    };
  }

  return [];
};

const validaProducts = async (products) => {
  const result = await productsModel.getAll();
  const productList = result[0];
  const itemId = productList.map((item) => item.id);
  // console.log();
  // console.log(itemId);

  if (products.some(({ productId }) => !itemId.includes(productId))) {
    return { result: { code: 404, message: 'Product not found' } };
  }

  return [];
};

module.exports = {
  validateSales,
  validaProducts,
};
