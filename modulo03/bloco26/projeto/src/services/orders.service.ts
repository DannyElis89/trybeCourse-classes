import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import IOrders from '../interfaces/orders.interface';
import ProductModel from '../models/products.model';

export default class OrderService {
  public model: OrderModel;

  public product: ProductModel;

  constructor() {
    this.product = new ProductModel(connection);
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrders[]> {
    const orders = await this.model.getAll();
    const products = await this.product.getAll();

    const result = orders.map(({ id, userId }) => {
      const productsIds = products.filter(({ orderId }) => orderId === id)
        .map((product) => product.id);

      return { id, userId, productsIds };
    });

    return result;
  }

  public async create(productsIds: object, user: object): Promise<IOrders> {
    const { id } = <any>user;

    const order = await this.model.createOrder(id, productsIds);
    return order;
  }
}
