import express from 'express';
import { handleNewUser } from '../../controllers/auth/UserController';

const router = express.Router();

router.post('/', handleNewUser);

export default router;
