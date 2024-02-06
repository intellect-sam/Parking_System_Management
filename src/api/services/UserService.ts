import User, { IUser } from '../models/User';
import { userSchema } from '../validation/validateRegistration';

export class UserService {
  static async createUser(userData: IUser): Promise<IUser> {
    // Validate user data
    const { error, value } = userSchema.validate(userData);
    if (error) {
      throw new Error(error.message);
    }

    // Create user
    const user: IUser = new User(value);
    await user.save();

    return user;
  }
}
