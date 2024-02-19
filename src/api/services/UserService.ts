import User from '../models/User';

type ISetUser = {
  email: string;
};

export class UserService {
  static async createUser(userData: ISetUser) {
    // You can replace 'any' with the specific type for userData

    // Check if the user already exists
    const existingUser = await User.findOne({
      where: { email: userData.email },
    });

    if (existingUser) {
      throw new Error(`User ${userData.email} already exists`);
    }

    // Create the user
    const createdUser = await User.create(userData);

    return createdUser;
  }
}
