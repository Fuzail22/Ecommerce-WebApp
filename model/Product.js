let seqInstance = require("../config/db.config");
let sequelize = require("sequelize");
let categoryModel = require("./Category");
let productModel = seqInstance.define("product", {
  id: {
    type: sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    //autoIncrement: true,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  price: {
    type: sequelize.BIGINT,
    allowNull: false,
  },
  categoryId: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
});
//productModel.belongsTo(categoryModel);
module.exports = productModel;
