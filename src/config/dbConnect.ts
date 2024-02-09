import mongoose from 'mongoose';
require('dotenv').config();

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);

    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB: ', err);
    process.exit(1);
  }
};

export default connectDB;
