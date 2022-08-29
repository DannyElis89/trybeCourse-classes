import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/orders.service';
import Token from '../middlewares/token.middleware';
// import validateToken from '../middlewares/token.validate';
import IOrders from '../interfaces/orders.interface';
import validateOrders from '../middlewares/order.validate';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req:Request, res:Response) => {
    const getAll = await this.orderService.getAll();
    res.status(StatusCodes.OK).json(getAll);
  };

  public create = async (req:Request, res:Response) => {
    const { productsIds } = req.body as IOrders;
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Token not found' });
    }

    let decoded: object;
    try {
      decoded = Token.verifyToken(token) as object;
    } catch (error) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Invalid token' });
    }
    validateOrders(productsIds);
    const createOrder = await this.orderService.create(productsIds, decoded);
    return res.status(201).json(createOrder);
  };
}
