import { QueryResult } from 'pg';
import { pool } from '../../config/dbConnect'; // Import the database connection pool

// Define the user interface
export interface IUser {
  id?: number; // Optional for auto-generated IDs
  email: string;
  password: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  phoneNumber: number;
  driversLicenseNo: string;
}

// Define the UserModel class
class UserModel {
  // Method to create a new user
  static async create(user: IUser): Promise<QueryResult> {
    const query = `
            INSERT INTO users(email, password, firstName, middleName, lastName, phoneNumber, driversLicenseNo)
            VALUES($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
        `;
    const values = [
      user.email,
      user.password,
      user.firstName,
      user.middleName || null,
      user.lastName,
      user.phoneNumber,
      user.driversLicenseNo,
    ];
    return await pool.query(query, values);
  }

  // Method to get a user by email
  static async getByEmail(email: string): Promise<QueryResult> {
    const query = `
            SELECT * FROM users
            WHERE email = $1
        `;
    const values = [email];
    return await pool.query(query, values);
  }
}

export default UserModel;
