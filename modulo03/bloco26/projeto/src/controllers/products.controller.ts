import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/products.service';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public create = async (req: Request, res: Response) => {
    const result = req.body;
    const productCreated = await this.productService.create(result);
    res.status(StatusCodes.CREATED).json(productCreated);
  };

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.productService.getAll();

    res.status(StatusCodes.OK).json(result);
  };
}
