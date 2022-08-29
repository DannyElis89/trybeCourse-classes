import jwt, { SignOptions } from 'jsonwebtoken';
import IUsers from '../interfaces/users.interface';

const options: SignOptions = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const key = 'senha123';
const newToken = (user: IUsers) => jwt.sign(user, key, options);

const verifyToken = (token: string) => jwt.verify(token, key); // , options);

export default {
  newToken,
  verifyToken,
};
