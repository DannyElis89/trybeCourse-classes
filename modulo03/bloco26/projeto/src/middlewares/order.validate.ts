import { StatusCodes } from 'http-status-codes';
import HttpException from './httpExeption';

const validateOrders = (productsIds:any) => {
  const productsIdsString = Array.isArray(productsIds);

  if (!productsIds) {
    throw new HttpException(StatusCodes.BAD_REQUEST, '"productsIds" is required');
  }
  if (!productsIdsString) {
    throw new HttpException(StatusCodes.UNPROCESSABLE_ENTITY, '"productsIds" must be an array');
  }
  if (productsIds.length < 1) {
    throw new HttpException(
      StatusCodes.UNPROCESSABLE_ENTITY,
      '"productsIds" must include only numbers',
    );
  }
  return true;
};

export default validateOrders;
