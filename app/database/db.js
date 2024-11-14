// config/database.js
const { Sequelize } = require('sequelize');

require('dotenv').config();

const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || 3306;
const dbName = process.env.DB_NAME || 'proyecto_web_3';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || '';
// console.log('-----------------------------------');
// console.log('Database configuration:');
// console.log(dbHost);
// console.log(dbPort);
// console.log(dbName);
// console.log(dbUser);
// console.log(dbPassword)
// console.log('-----------------------------------');

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: 'mariadb',
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the MariaDB database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
