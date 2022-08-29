import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import LoginService from '../services/login.service';

export default class AuthToken {
  private loginService;

  constructor() {
    this.loginService = new LoginService();
  }

  public validateToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization as string;
    const secret = 'senha123';

    try {
      if (!token) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ message: 'Token not found' });
      }

      jwt.verify(token, secret);
    } catch (error) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: 'Invalid token' });
    }

    next();
  };
}
