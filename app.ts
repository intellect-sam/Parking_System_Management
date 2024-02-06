import express from 'express';
import mongoose from 'mongoose';
import connectDB from './src/config/dbConnect';
import carOwnerRoute from './src/api/routes/auth/registerRoute';

const app = express();

const PORT = process.env.PORT || 3500;

connectDB();

app.get('/', (req, res) => {
  return res.send('hello world');
});

// routes
app.use('/register', carOwnerRoute);

mongoose.connection.once('open', () => {
  app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));
});
