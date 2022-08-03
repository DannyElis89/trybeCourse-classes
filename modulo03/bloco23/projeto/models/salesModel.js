const connection = require('../db');

const sales = async () => {
  const [rows] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES(NOW())',
  );
  return rows.insertId;
};

const salesProducts = async (saleId, productId, quantity) => {
  // console.log(`salesModel: ${saleId}, ${productId}, ${quantity}`);

  const query = `INSERT INTO StoreManager.sales_products
    (sale_id, product_id, quantity)
    VALUES (?, ?, ?)`;

  const [productSale] = await connection.execute(query, [saleId, productId, quantity]);

  // console.log(`Em models, productSale: ${productSale}`);

  return productSale;
};

const getAll = async () => {
  const query = `
    SELECT Sales.id as saleId, Sales.date, SProd.product_id as productId, SProd.quantity
      FROM StoreManager.sales as Sales
      INNER JOIN StoreManager.sales_products as SProd
      ON Sales.id = SProd.sale_id
      ORDER BY Sales.id ASC, SProd.product_id
    `;

  const result = await connection.execute(query);
  // console.log('Em models, result[0] de getAll', result[0]);
  return result[0];
};

const getById = async (id) => {
  const query = `
    SELECT Sales.date, SProducts.product_id as productId, SProducts.quantity
      FROM StoreManager.sales as Sales
      INNER JOIN StoreManager.sales_products as SProducts
      ON Sales.id = SProducts.sale_id
      WHERE Sales.id = ?
      ORDER BY Sales.id ASC, SProducts.product_id
    `;

  const result = await connection.execute(query, [id]);
  // console.log('Em models, result[0] de getById', result[0]);
  return result[0];
};

const deleteSale = async (id) => {
  // const saleById = await connection.execute(`
  // SELECT * FROM StoreManager.sales WHERE id = ?`,
  //   [id]);
  // console.log('saleById em salesModels ', saleById);

  const result = await connection.execute(`
    DELETE FROM StoreManager.sales
      WHERE id = ?`,
    [id]);

  return result;
};

const updateSale = async (id, salesToUpdate) => {
  await Promise.all(salesToUpdate.map(async ({ productId, quantity }) => {
    await connection.execute(`
    UPDATE StoreManager.sales_products
      SET quantity = (?)
      WHERE sale_id = (?)
      AND product_id = (?)`,
      [quantity, id, productId]);
  }));

  return id;
};

module.exports = {
  sales,
  salesProducts,
  getAll,
  getById,
  deleteSale,
  updateSale,
};
