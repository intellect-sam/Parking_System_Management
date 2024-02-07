import { Request, Response } from 'express';
import { UserService } from '../../services/UserService';

export const handleNewUser = async (req: Request, res: Response) => {
  try {
    if (!req.body)
      return res.status(400).json({ message: 'Supply the right details ' });
    const user = await UserService.createUser(req.body);
    res
      .status(201)
      .json({ message: 'Car owner created successfully', data: user });
  } catch (error) {
    console.error('Error creating car owner:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
