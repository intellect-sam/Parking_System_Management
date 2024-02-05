import mongoose, { Connection } from 'mongoose';
require('dotenv').config();

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);

    console.log('Connected to MongoDB');

    mongoose.connection.on('connected', () =>
      console.log('Mongoose connected to MongoDB')
    );
    mongoose.connection.on('error', (err) =>
      console.log(`Mongoose connection error: ${err}`)
    );
    mongoose.connection.on('disconnected', () =>
      console.log('Mongoose disconnected')
    );
  } catch (err) {
    console.error('Error connecting to MongoDB: ', err);
    process.exit(1);
  }
};

const dbConnection: Connection = mongoose.connection;

export default connectDB;
export { dbConnection };
