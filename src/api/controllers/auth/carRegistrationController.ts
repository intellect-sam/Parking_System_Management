import { Request, Response } from 'express';
import CarOwner from '../../models/carOwner';
import bcrypt from 'bcrypt';
import userSchema from '../../validation/validateRegistration';

const handleNewCarOwner = async (req: Request, res: Response) => {
  try {
    const hashedPassword: string = await bcrypt.hash(req.body.password, 10);
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const result = await CarOwner.create({
      ...req.body,
      password: hashedPassword,
    });

    console.log(result); // This shows the result

    res
      .status(201)
      .json({ message: 'Car owner created successfully', data: result });
  } catch (error) {
    console.error('Error creating car owner:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
  return res.status(500).json({ message: 'Internal server error' });
};

export default handleNewCarOwner;
