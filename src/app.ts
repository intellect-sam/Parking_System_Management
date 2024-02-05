import express from 'express';
import mongoose from 'mongoose';
// import { dbConnection } from './config/dbConnect';
import connectDB from './config/dbConnect';

const app = express();

const PORT = process.env.PORT || 3500;

connectDB();

app.get('/', (req, res) => {
  return res.send('hello world');
});

mongoose.connection.once('open', () => {
  app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));
});
