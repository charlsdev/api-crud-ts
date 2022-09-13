import Router from 'express-promise-router';
const router = Router();

import { getWelcome } from '../controllers/index.controllers';

router.get('/', getWelcome);

export default router;