const connection = require('../db');

const getAll = () => {
  return connection.execute('SELECT * FROM comics.creators;')
};

const getById = (id) => {
  return connection.execute('SELECT * FROM comics.creators WHERE id  = ?;', [id]);
};

const add = async (name, birth_date, id_characters) => {
  const [row] = await connection.execute(
    'INSERT INTO comics.creators (name, birth_date, id_characters) VALUES (?, ?, ?)',
    [ name, birth_date, id_characters ]
  );
  // console.log(row);

  const result = {
    id: row.insertId,
    name,
    birth_date,
    id_characters,
  };

  return result;
}

const update = async (id, name, birth_date, id_characters) => {
  const [result] = await connection.execute(
    'UPDATE comics.creators SET name=?, birth_date=?, id_characters=? WHERE id=?',
      [name, birth_date, id_characters, id]
  );

  console.log(result);

  return result.affectedRows;
};

const remove = (id) => {
  connection.execute('DELETE FROM comics.creators WHERE id=?', [id]);
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove
}
