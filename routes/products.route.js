let express = require("express");
let productRouter = express.Router();
let productController = require("./../controller/product.controller");

productRouter.get("/", productController.getAllProducts);

productRouter.get("/:productid", productController.getProductById);

productRouter.post("/", productController.addNewProduct);

productRouter.delete("/:productId", productController.deleteProductByID);
module.exports = productRouter;
