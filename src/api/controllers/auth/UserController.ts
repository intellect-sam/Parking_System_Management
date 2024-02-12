import { Request, Response } from 'express';
import { UserService } from '../../services/UserService';
import { userSchema } from '../../validation/validateRegistration';

export const handleNewUser = async (req: Request, res: Response) => {
  try {
    // Validate user data
    const { error } = userSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json(error.details);
    }
    const user = await UserService.createUser(req.body);
    return res
      .status(201)
      .json({ message: 'Car owner created successfully', data: user });
  } catch (error: any) {
    if (error.message.includes('already exists')) {
      return res.status(409).json({ message: `Already Exist` });
    }
    console.error('Error creating car owner:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
