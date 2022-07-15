const connection = require('../db');

const getAll = () =>
    connection.execute(
        `SELECT * FROM comics.creators`
    );

const getAllTables = () =>
    connection.execute(
        `SELECT comics.creators.name AS creatorName,
        comics.creators.birth_date AS creatorBirthDate,
        comics.characters.name AS charactersName,
        comics.characters.cartoon AS charactersCartoon,
        comics.characters.year AS charactersYear
        FROM comics.creators
      INNER JOIN comics.characters
      ON comics.creators.id_characters = comics.characters.id`
    );

const getById = (id) =>
    connection.execute(
        `SELECT * FROM comics.creators
      INNER JOIN comics.characters
      ON comics.creators.id_characters = comics.characters.id
      WHERE comics.creators.id = ?`,
        [id]
    );

const add = async (name, birthDate, idCharacter) => {
    const [row] = await connection.execute("INSERT INTO creators (name, birth_date, id_characters) VALUES (?,?,?)", [name, birthDate, idCharacter]);
    const result = {
        id: row.insertId,
        name,
        birthDate,
        idCharacter
    }
    return result;
}

const update = async (id, name, birth_date, id_character) => {
    const [result] = await connection.execute(
        `UPDATE comics.creators
        SET name = ?, birth_date = ?, id_characters = ?
        WHERE id = ?`,
        [name, birth_date, id_character, id]
    );

    return result.affectedRows;
}

const exclude = async (id) =>
    connection.execute(
        `DELETE FROM comics.creators
      WHERE id = ?`,
        [id]
    );

module.exports = {
    getAll,
    getAllTables,
    getById,
    add,
    update,
    exclude
}
