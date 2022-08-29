import { Pool } from 'mysql2/promise';
import IUsers from '../interfaces/users.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getByLogin(user: IUsers): Promise<IUsers> {
    const { username, password } = user;

    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = (?) AND password = (?)',
      [username, password],
    );

    const userReturned = JSON.parse(JSON.stringify(result))[0] as IUsers;
    return userReturned;
  }
}
