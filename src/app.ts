import express from 'express';
import carOwnerRoute from './api/routes/auth/register';

const app = express();
const port = process.env.PORT || 3500;

// connectDB();
app.use(express.json());
app.use(express.urlencoded());

// routes
app.use('/register', carOwnerRoute);

// mongoose.connection.once('open', () => {
//   app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));
// });

app.listen(port, () => {
  console.log('Server is running successfully');
});
