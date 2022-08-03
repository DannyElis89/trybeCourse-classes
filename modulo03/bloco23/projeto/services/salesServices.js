const salesModels = require('../models/salesModel');
const validateSales = require('../middlewares/salesValidate');

const resultSaleNotFound = { result: { code: 404, message: 'Sale not found' } };

const addProductsForSale = async (itemsSold) => {
  const id = await salesModels.sales();
  console.log('Em services itemsSold', itemsSold, id);

  if (id) {
    return {
      id,
      itemsSold,
    };
  }
};

const salesProducts = async (itemsSold) => {
  const saleId = await salesModels.sales();
  console.log('===============!!!!!!==============');
  console.log('itemsSold em salesProducts de salesServices', itemsSold);

  itemsSold.forEach(async (item) => {
    await salesModels.salesProducts(saleId, item.productId, item.quantity);
  });

  const salesItems = {
    id: saleId,
    itemsSold,
  };
  console.log('===============!!!!!!==============');
  console.log('salesItems em salesServices', salesItems);
  return salesItems;
};

const getAll = async () => {
  const allSales = await salesModels.getAll();
  // console.log('Em services allSales', allSales);

  if (allSales.length < 1) {
    return resultSaleNotFound;
  }
  // console.log('===============!!!!!!==============');
  // console.log(allSales);

  return allSales;
};

const getById = async (id) => {
  const sale = await salesModels.getById(id);
  // console.log('====!!!!!!!!!!!!!=====');
  // console.log('Em services saleById', sale);

  if (sale.length < 1) {
    return { code: 404, message: 'Sale not found' };
  }

  return sale;
};

const deleteSale = async (id) => {
  const saleById = await salesModels.getById(id);
  // console.log('===============!!!!!!==============');
  // console.log('saleById em salesServices ', saleById);

  if (saleById.length < 1) {
    return resultSaleNotFound;
  }

  const deleteSaleById = await salesModels.deleteSale(id);
  // console.log('deleteSaleById em salesServices ', saleById);
  return deleteSaleById;
};

const updateSale = async (id, sales) => {
  const salesValidate = await validateSales.validateSales(sales);
  if (salesValidate.result) return resultSaleNotFound;

  const validateId = await salesModels.getById(id);
  // console.log('validateId em salesService ', validateId);

  if (validateId < 1) return resultSaleNotFound;
  // console.log(validateId.length);

  const updateByIdSale = await salesModels.updateSale(id, sales);

  return {
    saleId: updateByIdSale,
    itemsUpdated: sales,
  };
};

module.exports = {
  addProductsForSale,
  salesProducts,
  getAll,
  getById,
  deleteSale,
  updateSale,
};
