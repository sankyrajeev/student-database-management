const Sequelize = require('sequelize');

require('dotenv').config();

const PORT = process.env.PORT || 3306;


// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: PORT
    });

module.exports = sequelize;
