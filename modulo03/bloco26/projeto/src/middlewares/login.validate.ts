import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/users.service';

export default class ValidateLogin {
  private userService;

  constructor() {
    this.userService = new UserService();
  }

  public validateLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: '"username" is required' });
    }

    if (!password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: '"password" is required' });
    }

    next();
  };

  public validLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    const users = await this.userService.getAll();
    const searchUsername = users.some((elem: { username: string }) => elem.username === username);
    const searchPassword = users.some((elem: { password: string }) => elem.password === password);

    if (!searchUsername || !searchPassword) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Username or password invalid' });
    }

    next();
  };
}
