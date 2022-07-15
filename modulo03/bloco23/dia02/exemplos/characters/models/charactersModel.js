const connection = require('../db');

const getAll = () => {
    return connection.execute('SELECT * FROM comics.characters');
};

const getCartoon = (cartoon) => {
    return connection.execute('SELECT * FROM comics.characters WHERE comics.characters.cartoon = ?', [cartoon]);
};

const getById = (id) => {
    return connection.execute('SELECT * FROM comics.characters WHERE id = ?', [id]);
};

const add = async (name, cartoon, year) => {
    const [row] = await connection.execute(`INSERT INTO comics.characters (name, cartoon, year)
    VALUES (?, ?, ?)`, [name, cartoon, year]);
    console.log(row)
    const result = {
        id: row.insertId,
        name,
        cartoon,
        year
    };
    return result;
};

const update = async (id, name, cartoon, year) => {
    const [result] = await connection
    .execute('UPDATE comics.characters SET name=?, cartoon=?, year=? WHERE id=?', [name, cartoon, year, id]);
    console.log(result)

    return result.affectedRows;
};

const remove = async (id) => {
    connection.execute('DELETE FROM comics.characters WHERE id = ?', [id]);
};

module.exports = {
    getAll,
    getById,
    getCartoon,
    add,
    update,
    remove
}
