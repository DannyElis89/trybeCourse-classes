const connection = require('../db');

const formatUser = ({ id, first_name: firstName, last_name: lastName, email, password }) => {
  return {
    id,
    firstName,
    lastName,
    email,
    password,
  };
}

const getAll = () => {
  try{
    return connection.execute('SELECT * FROM users_crud.users;');
  } catch(err){
      console.log(err);
      res.status(500).json({ message: 'Erro interno'});
  }
}


const createUser = async ({ firstName, lastName, email, password }) => {
  // const { firstName, lastName, email, password } = req.body;
  const [row] = await connection.execute(
    'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?)',
    [firstName, lastName, email, password]
  );
  // console.log(row);

  const result = formatUser(row);
  // console.log(result);

  return result;
}

module.exports = {
  formatUser,
  getAll,
  createUser,
};
