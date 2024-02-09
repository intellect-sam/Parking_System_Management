import User, { IUser } from '../models/User';

export class UserService {
  static async createUser(userData: IUser): Promise<IUser> {
    // check if the user exist
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) throw new Error(`User ${userData.email} already exists`);

    // Create user
    const user: IUser = new User(userData);

    await user.save();

    return user;
  }
}
