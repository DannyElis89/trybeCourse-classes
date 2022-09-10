import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Matchers } from '../interfaces/IMatchers';

export default class MatcherController {
  constructor(private matcherService: Matchers) {
    this.matcherService = matcherService;
  }

  async getAllMatchers(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const matchers = await this.matcherService.getAllMatchers();

      return res
        .status(StatusCodes.OK)
        .json(matchers);
    } catch (err) {
      next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { body } = req;
      const newMatcher = await this.matcherService.create(body);

      return res
        .status(StatusCodes.CREATED)
        .json(newMatcher);
    } catch (e) {
      next(e);
    }
  }

  async updateProgress(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { params } = req;
      await this.matcherService.updateProgress(Number(params.id));

      return res.status(StatusCodes.OK).json({ message: 'Finished' });
    } catch (e) {
      next(e);
    }
  }
}
