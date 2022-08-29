import { Pool, ResultSetHeader } from 'mysql2/promise';
import IOrders from '../interfaces/orders.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrders[]> {
    const [rows] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Orders',
    );
    return rows as IOrders[];
  }

  public async createOrder(id: number, productsIds: object): Promise<IOrders> {
    const query1 = 'INSERT INTO Trybesmith.Orders (UserId) VALUES (?)';
    const result = await this.connection.execute<ResultSetHeader>(query1, [id]);

    const [data] = result;
    const { insertId } = data;

    const query2 = 'UPDATE Trybesmith.Products SET orderId = (?) WHERE id = (?)';
    const values = Object.values(productsIds);

    values.forEach(async (elem) => {
      await this.connection.execute<ResultSetHeader>(
        query2,
        [insertId, elem as number],
      );
    });

    return { userId: id, productsIds };
  }
}
