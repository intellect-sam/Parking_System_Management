import express from 'express';
import mongoose from 'mongoose';
import { dbConnection } from './config/dbConnect';
import connectDB from './config/dbConnect';

const app = express();

const PORT = process.env.PORT || 3500;

connectDB();

app.get('/', (req, res) => {
  return res.send('hello world');
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));
});

// process.on('SIGINT', () => {
//   dbConnection.close((err) => {
//     if (err) {
//       console.log('Error occurred while closing MongoDB connection', err);
//       return false;
//     } else {
//       console.log('App terminated successfully');
//       return true;
//     }
//     process.exit(0);
//   });
// });
