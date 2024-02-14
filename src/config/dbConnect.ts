import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'test123',
  port: 5432,
});

export default sequelize;
