import { StatusCodes } from 'http-status-codes';
import IUsers from '../interfaces/users.interface';
import HttpException from './httpExeption';

const usernameValidate = (user: IUsers) => {
  const { username } = user;

  if (!username) throw new HttpException(StatusCodes.BAD_REQUEST, '"username" is required');

  if (typeof username !== 'string') {
    throw new HttpException(
      StatusCodes.UNPROCESSABLE_ENTITY,
      '"username" must be a string',
    );
  }

  if (username.length < 3) {
    throw new HttpException(
      StatusCodes.UNPROCESSABLE_ENTITY,
      '"username" length must be at least 3 characters long',
    );
  }

  return true;
};

const classValidate = (user: IUsers) => {
  const { classe } = user;

  if (!classe) throw new HttpException(StatusCodes.BAD_REQUEST, '"classe" is required');

  if (typeof classe !== 'string') {
    throw new HttpException(
      StatusCodes.UNPROCESSABLE_ENTITY,
      '"classe" must be a string',
    );
  }

  if (classe.length < 3) {
    throw new HttpException(
      StatusCodes.UNPROCESSABLE_ENTITY,
      '"classe" length must be at least 3 characters long',
    );
  }

  return true;
};

const levelValidate = (user: IUsers) => {
  const { level } = user;

  if (level === undefined) throw new HttpException(StatusCodes.BAD_REQUEST, '"level" is required');

  if (typeof level !== 'number') {
    throw new HttpException(
      StatusCodes.UNPROCESSABLE_ENTITY,
      '"level" must be a number',
    );
  }

  if (level <= 0) {
    throw new HttpException(
      StatusCodes.UNPROCESSABLE_ENTITY,
      '"level" must be greater than or equal to 1',
    );
  }

  return true;
};

const passwordValidate = (user: IUsers) => {
  const { password } = user;

  if (!password) throw new HttpException(StatusCodes.BAD_REQUEST, '"password" is required');

  if (typeof password !== 'string') {
    throw new HttpException(
      StatusCodes.UNPROCESSABLE_ENTITY,
      '"password" must be a string',
    );
  }

  if (password.length < 8) {
    throw new HttpException(
      StatusCodes.UNPROCESSABLE_ENTITY,
      '"password" length must be at least 8 characters long',
    );
  }

  return true;
};

export default {
  usernameValidate,
  classValidate,
  levelValidate,
  passwordValidate,
};
