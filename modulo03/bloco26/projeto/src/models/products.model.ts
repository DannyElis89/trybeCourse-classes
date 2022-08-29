import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProducts from '../interfaces/products.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(products: IProducts): Promise<IProducts> {
    const { name, amount } = products;

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const [data] = result;
    const { insertId } = data;
    return { id: insertId, name, amount };
  }

  public async getAll(): Promise<IProducts[]> {
    const [rows] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return rows as IProducts[];
  }
}
