const { Sequelize } = require('sequelize');

const db_connection = new Sequelize("db_loreto","root", "", {
  host: "localhost",
  dialect: 'mysql'
});

module.exports = db_connection;