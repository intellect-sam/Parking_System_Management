import { QueryResult } from 'pg';
import { pool } from '../../config/dbConnect'; // Import the PostgreSQL connection pool
import { IUser } from '../models/User';

export class UserService {
  static async createUser(userData: IUser): Promise<IUser> {
    try {
      // Check if the user exists
      const existingUserQuery = 'SELECT * FROM users WHERE email = $1';
      const existingUserValues = [userData.email];
      const existingUserResult: QueryResult = await pool.query(
        existingUserQuery,
        existingUserValues
      );

      if (existingUserResult.rows.length > 0) {
        throw new Error(`User ${userData.email} already exists`);
      }

      // Create user
      const createUserQuery = `
                INSERT INTO users(email, password, firstName, middleName, lastName, phoneNumber, driversLicenseNo)
                VALUES($1, $2, $3, $4, $5, $6, $7)
                RETURNING *
            `;
      const createUserValues = [
        userData.email,
        userData.password,
        userData.firstName,
        userData.middleName || null,
        userData.lastName,
        userData.phoneNumber,
        userData.driversLicenseNo,
      ];
      const createUserResult: QueryResult = await pool.query(
        createUserQuery,
        createUserValues
      );

      return createUserResult.rows[0]; // Return the created user
    } catch (error: any) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }
}
