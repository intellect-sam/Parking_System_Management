const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnection.js');

const app = express();

// Application port number
const PORT = process.env.PORT || 8080;

// Connect Database
connectDB();
app.use(
  cors({
    credential: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

mongoose.connection.once('open', () => {
  console.log('Connected to database');
  app.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));
});
