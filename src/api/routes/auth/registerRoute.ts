import express from 'express';
import { Request, Response } from 'express';
import handleNewCarOwner from '../../controllers/auth/carRegistrationController';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
  handleNewCarOwner(req, res);
});

export default router;
