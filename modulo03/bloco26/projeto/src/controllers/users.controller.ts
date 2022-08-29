import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/users.service';
import Token from '../middlewares/token.middleware';
// import IUsers from '../interfaces/users.interface';

export default class UsersController {
  constructor(private usersService = new UsersService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    await this.usersService.create(user);
    const token = Token.newToken(user);
    res.status(StatusCodes.CREATED).json({ token });
  };
}
