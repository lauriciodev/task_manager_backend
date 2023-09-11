const { Sequelize } = require("sequelize");

const connection = new Sequelize("db_list_task", "root", "senhafacil@2030", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
