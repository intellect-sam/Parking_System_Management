import express from 'express';
import carOwnerRoute from './api/routes/auth/register';
import sequelize from './config/database';

const main = async () => {
  const app = express();
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    throw error;
  }

  const port = process.env.PORT || 3500;

  app.use(express.json());
  app.use(express.urlencoded());

  // routes
  app.use('/register', carOwnerRoute);

  app.listen(port, () => {
    console.log('Server is running successfully');
  });
};

main().catch((error) => {
  confirm('Error: ' + error.message);
});

// use migration: application to communicate with db
