import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUsers from '../interfaces/users.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUsers): Promise<IUsers> {
    const { username, classe, level, password } = user;
    const q = 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)';

    const result = await this.connection.execute<ResultSetHeader>(
      q,
      [username, classe, level, password],
    );

    const [data] = result;
    // console.log(data);
    const { insertId } = data;
    return { id: insertId, username, classe, level, password };
  }
}
