import express from 'express';
import { Request, Response } from 'express';
import { handleNewUser } from '../../controllers/auth/UserController';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
  handleNewUser(req, res);
});

export default router;
