import { StatusCodes } from 'http-status-codes';
import IProducts from '../interfaces/products.interface';
import HttpException from './httpExeption';

const nameValidate = (product: IProducts) => {
  const { name } = product;

  if (!name) throw new HttpException(StatusCodes.BAD_REQUEST, '"name" is required');

  if (name.length < 2) {
    throw new HttpException(
      StatusCodes.UNPROCESSABLE_ENTITY,
      '"name" length must be at least 3 characters long',
    );
  }

  if (typeof name !== 'string') {
    throw new HttpException(
      StatusCodes.UNPROCESSABLE_ENTITY,
      '"name" must be a string',
    );
  }

  return true;
};

const amountValidate = (product: IProducts) => {
  const { amount } = product;

  if (!amount) throw new HttpException(StatusCodes.BAD_REQUEST, '"amount" is required');

  if (amount.length < 2) {
    throw new HttpException(
      StatusCodes.UNPROCESSABLE_ENTITY,
      '"amount" length must be at least 3 characters long',
    );
  }

  if (typeof amount !== 'string') {
    throw new HttpException(
      StatusCodes.UNPROCESSABLE_ENTITY,
      '"amount" must be a string',
    );
  }

  return true;
};

export default {
  nameValidate,
  amountValidate,
};
