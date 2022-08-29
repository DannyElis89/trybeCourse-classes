import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IUser from '../interfaces/users.interface';
import LoginService from '../services/login.service';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const user = req.body as IUser;

    const result = await this.loginService.validaLogin(user);

    return res.status(StatusCodes.OK).json(result);
  };
}
