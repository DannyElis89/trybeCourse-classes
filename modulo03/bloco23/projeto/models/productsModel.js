const connection = require('../db');

const getAll = () => connection.execute('SELECT * FROM StoreManager.products ORDER BY id');

const getById = (id) => connection.execute(
  'SELECT * FROM StoreManager.products WHERE id = ?', [id],
);

const getProduct = (product) => connection.execute(
  'SELECT * FROM StoreManager.products WHERE StoreManager.products.name = ?', [product],
);

const add = async (name) => {
  const [rows] = await connection.execute(
    `INSERT INTO StoreManager.products (name)
    VALUES (?)`, [name],
  );
  // console.log(rows);
  const result = {
    id: rows.insertId,
    name,
  };

  return result;
};

const updateProduct = async ({ id, name }) => {
  await connection.execute(`
    UPDATE StoreManager.products SET name = ? WHERE id = ?`,
    [name, id]);

  const result = await connection.execute(`
  SELECT * FROM StoreManager.products WHERE id = ?`,
    [id]);
  // console.log('result[0] em productsModel', result[0]);
  return result[0];
};

const deleteProduct = async (id) => {
  await connection.execute(`
  SELECT * FROM StoreManager.products WHERE id = ?`,
   [id]);

  const result = await connection.execute(`
    DELETE FROM StoreManager.products
      WHERE id = ?`,
    [id]);

  // console.log('=========================');
  // console.log('result de deleteProduct em productsModel: ', result);

  return result;
};

const searchProduct = async (name) => {
  const product = await connection.execute(`
  SELECT * FROM StoreManager.products WHERE name LIKE (?)`, [`%${name}%`]);

  // console.log('product em productsModel: ', product[0]);
  return product[0];
};

module.exports = {
  getAll,
  getById,
  getProduct,
  add,
  updateProduct,
  deleteProduct,
  searchProduct,
};
