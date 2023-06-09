let seqInstance = require("./../config/db.config");
let sequelize = require("sequelize");
let Product = require("./Product");
let categoryModel = seqInstance.define("categories", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

categoryModel.hasMany(Product);
module.exports = categoryModel;
