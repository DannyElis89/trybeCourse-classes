import { StatusCodes } from 'http-status-codes';
import LoginModel from '../models/login.model';
import IUsers from '../interfaces/users.interface';
import connection from '../models/connection';
import HttpException from '../middlewares/httpExeption';
import Token from '../middlewares/token.middleware';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async validaLogin(user: IUsers) {
    const { username, password } = user;

    if (!username) throw new HttpException(StatusCodes.BAD_REQUEST, '"username" is required');
    if (!password) throw new HttpException(StatusCodes.BAD_REQUEST, '"password" is required');

    const userReturned = await this.model.getByLogin(user);
    if (!userReturned) {
      throw new HttpException(
        StatusCodes.UNAUTHORIZED,
        'Username or password invalid',
      );
    }

    return { token: Token.newToken(userReturned) };
  }
}
