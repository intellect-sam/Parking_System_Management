import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import carOwnerRoute from './api/routes/auth/register';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.routes();
  }

  protected routes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Welcome Home');
    });
  }
}

const app = new App().app;

const port = process.env.PORT || 3500;

// connectDB();
// app.use(express.json());
// app.use(express.urlencoded());

// routes
app.use('/register', carOwnerRoute);

// mongoose.connection.once('open', () => {
//   app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));
// });

app.listen(port, () => {
  console.log('Server is running successfully');
});
