let sequelize = require("sequelize");
let seqInstance = require("../config/db.config");
let UserModel = seqInstance.define("user", {
  email: {
    type: sequelize.STRING,
    lowercase: true,
    match:
      /[a-z0–9!#$%&’*+/=?^_`{|}~-]+(?:\.[a-z0–9!#$%&’*+/=?^_`{|}~-]+)*@(?:[a-z0–9](?:[a-z0–9-]*[a-z0–9])?\.)+[a-z0–9](?:[a-z0–  9-]*[a-z0–9])?/,
    unique: true,
    // required: true,
    primaryKey: true,
    allowNull: false,
  },
  password: {
    type: sequelize.STRING,
    // required: true,
    allowNull: false,
  },
  lastLogin: {
    type: sequelize.DATE,
    // defaultValue: sequelize.NOW,
    // required: true,
    // allowNull: false,
  },
});

module.exports = UserModel;
