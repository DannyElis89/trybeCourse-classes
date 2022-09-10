import * as express from 'express';
import MatcherService from '../services/matcherService';
import MatcherController from '../controllers/matcherController';
import tokenMid from '../middlewares/tokenMiddleware';

const matcherService = new MatcherService();
const matcherController = new MatcherController(matcherService);

const matchersR = express.Router();

matchersR.patch(
  '/:id/finish',
  tokenMid,
  (req, res, next) => matcherController.updateProgress(req, res, next),
);

matchersR.patch('/:id', (req, res, next) => matcherController.updateProgress(req, res, next));

matchersR.post(
  '/',
  tokenMid,
  (req, res, next) => matcherController.create(req, res, next),
);

matchersR.get(
  '/',
  (req, res, next) => matcherController.getAllMatchers(req, res, next),
);

export default matchersR;
