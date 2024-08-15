import { Sequelize } from 'sequelize';
import { AWS_CONFIG } from './config';
console.log(
  'sequalize: ',
  AWS_CONFIG.database.database,
  AWS_CONFIG.database.user,
  AWS_CONFIG.database.password,
  AWS_CONFIG.database.host,
);

const sequelize = new Sequelize(
  AWS_CONFIG.database.database,
  AWS_CONFIG.database.user,
  AWS_CONFIG.database.password,
  {
    host: AWS_CONFIG.database.host,
    dialect: 'mysql', // Cambia esto si usas PostgreSQL u otro RDBMS
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
