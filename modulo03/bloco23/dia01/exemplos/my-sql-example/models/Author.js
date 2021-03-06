const connection = require('../db');

// Cria uma string com o nome completo do autor
const getNewAuthor = ({ id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName,lastName].filter(Boolean).join(' ') ;
  return{
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
};


// Busca todas as pessoas autoras do banco.
const getAll = async() => {
  const [ authors ] = await connection.execute('SELECT id, first_name,middle_name,last_name FROM authors');

  return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
  const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
  const [ authorData ] = await connection.execute(query, [id]);

    if (authorData.length === 0) return null;

    const {firstName, middleName, lastName} = authorData.map(serialize)[0];

    return getNewAuthor({
      id,
      firstName,
      middleName,
      lastName,
    })
};

const isValid = (firstName, _middleName, lastName) => {
  if( !firstName || typeof firstName !== 'string') return false;
  if( !lastName || typeof lastName !== 'string') return false;
  return true;
};

const createAuthor = async (firstName, middleName, lastName) => connection.execute(
	'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
	[firstName, middleName, lastName],
);

module.exports = {
  getAll,
  findById,
  isValid,
  createAuthor,
};
