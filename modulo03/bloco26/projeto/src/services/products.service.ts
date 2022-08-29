import ProductModel from '../models/products.model';
import IProducts from '../interfaces/products.interface';
import connection from '../models/connection';
import productValidate from '../middlewares/product.validate';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(products: IProducts): Promise<IProducts> {
    const { nameValidate, amountValidate } = productValidate;

    nameValidate(products);
    amountValidate(products);

    const result = await this.model.create(products);
    return result;
  }

  public async getAll():Promise<IProducts[]> {
    const result = await this.model.getAll();
    return result;
  }
}
