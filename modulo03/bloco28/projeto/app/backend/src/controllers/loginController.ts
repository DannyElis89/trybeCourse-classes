import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import Login from '../interfaces/ILogin';

export default class LoginController {
  constructor(private loginService: Login) {
    this.loginService = loginService;
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { body } = req;
    try {
      const token = await this.loginService.login(body);
      return res
        .status(StatusCodes.OK)
        .json({ token });
    } catch (e) {
      next(e);
    }
  }

  static async loginValidate(req: Request, res: Response, _next: NextFunction): Promise<Response> {
    const data = req.body.user;
    const { role } = data;
    return res
      .status(StatusCodes.OK)
      .json({ role });
  }
}
