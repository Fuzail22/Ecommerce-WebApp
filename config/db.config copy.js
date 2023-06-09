let sequelize = require("sequelize");
let seqInstance = new sequelize("<db name>", "root", "<Password>", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
//seqInstance.sync({ alter: true });
module.exports = seqInstance;
