import express from 'express';
import carOwnerRoute from './api/routes/auth/register';

const app = express();
const port = process.env.PORT || 3500;

app.use(express.json());
app.use(express.urlencoded());

// routes
app.use('/register', carOwnerRoute);

app.listen(port, () => {
  console.log('Server is running successfully');
});
