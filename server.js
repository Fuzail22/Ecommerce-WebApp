let serverConfig = require("./config/server.config");
// let dbConfig = require("./config/db.config");
let express = require("express");
let app = express();
let router = require("./routes/index");
let bodyParser = require("body-parser");
let ErrorHandler = require("./middlewares/ErrorHandler");
let Product = require("./model/Product");
let Category = require("./model/Category");
let mysql = require("mysql");
app.use(bodyParser.json());
app.use(router);
app.use(ErrorHandler);

let InsetManyValuesInCategories = async () => {
  await Category.bulkCreate([
    {
      name: "Fashion",
    },
    {
      name: "Mobile",
    },
    {
      name: "Electronics",
    },
    {
      name: "Appliances",
    },
  ]);
  console.log("Categories bulk insert successful");
};
async function InsertManyValuesInProducts() {
  await Product.bulkCreate([
    {
      name: "Samsung Galaxy Note",
      categoryId: 2,
      price: 18000,
    },
    {
      name: "Iphone 13",
      categoryId: 2,
      price: 60000,
    },
    {
      name: "Sony bravia",
      categoryId: 3,
      price: 40000,
    },
    {
      name: "Boat Rugged",
      categoryId: 3,
      price: 4000,
    },
    {
      name: "JBL Storm",
      categoryId: 3,
      price: 9000,
    },
    {
      name: "Vu 5",
      categoryId: 3,
      price: 32000,
    },
  ]);
  console.log("products bulk insert successful");
}
// let init = async () => {
//   await dbConfig.sync({ alter: true });
//   console.log("Tables create successfully");
//   //InsetManyValuesInCategories();
//   //InsertManyValuesInProducts();
// };
function saveToDB() {
  console.log("inside db");
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#PerExcellent#",
    database: "EcommerceApp_db",
  });
  // con.connect(function (err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  // });
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var company = document.getElementById("company").value;
  var message = document.getElementById("message").value;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql =
      "INSERT INTO customer (name,email,phone,company,message) VALUES ('" +
      name +
      "', '" +
      email +
      "','" +
      phone +
      "','" +
      company +
      "','" +
      message +
      "')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
}
app.listen(serverConfig.PORT, function (req, res) {
  console.log("server listening @: " + serverConfig.PORT);
  // init();
});
