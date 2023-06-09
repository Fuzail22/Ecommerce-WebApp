const path = require("path");
let express = require("express");
let app = express();
let router = express.Router();
let categoryRouter = require("./categories.route");
let productRouter = require("./products.route");

// app.use(express.static(__dirname));

router.get("/", function (req, res, next) {
  // res.sendFile(path.join(__dirname + "error.html"));
  // res.sendFile(path.join(__dirname + "error.html"));
  // res.sendFile("./project/index.html", { root: __dirname });
  res.status(200).write("this is home route");
  res.end();
  //res.status(200).json({ Data: "anb" });
});
router.use("/ecomm/api/v1/categories", categoryRouter);
router.use("/ecomm/api/v1/products", productRouter);
/* These belong to temporary academic project 
router.get("/contact.html", function (req, res) {
  res.sendFile(__dirname + "/" + "./project/contact.html");
});
router.get("/style.css", function (req, res) {
  res.sendFile(__dirname + "/" + "./project/style.css");
});
router.get("/js/db.js", function (req, res) {
  res.sendFile(__dirname + "/" + "./project/js/db.js");
});
app.use("./project/images", express.static(process.cwd() + "./project/images"));
// router.use(express.static(__dirname + "./project/images"));
 */

module.exports = router;
