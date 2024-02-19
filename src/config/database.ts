import { Sequelize } from 'sequelize';
import 'dotenv/config';

const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

if (!dbName || !dbUsername || !dbPassword) {
  throw new Error(
    'Please provide values for DB_NAME, DB_USERNAME, and DB_PASSWORD environment variables.'
  );
}

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
sequelize.sync({ force: true });
export default sequelize;
