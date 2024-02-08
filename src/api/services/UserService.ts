import User, { IUser } from '../models/User';

export class UserService {
  static async createUser(userData: IUser): Promise<IUser> {
    // Create user
    const user: IUser = new User(userData);
    await user.save();

    return user;
  }
}
