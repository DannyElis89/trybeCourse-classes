import { Router } from 'express';
import login from './login';
import teams from './teams';

const router = Router();

router.use(teams);
router.use(login);

export default router;
