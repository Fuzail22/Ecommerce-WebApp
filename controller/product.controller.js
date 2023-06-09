const sequelize = require("sequelize");
let Products = require("../model/Product");
let seqInstance = require("./../config/db.config");

// async function createTable() {
//   await Products.sync({ force: true });
//   console.log("Product Table create Successfully");
//   InsertManyValues();
// }
let getAllProducts = async (req, res, next) => {
  let categoryId = req.query.categoryId;
  let minPrice = req.query.minPrice;
  let maxPrice = req.query.maxPrice;
  let query;
  if (!categoryId) {
    query = await filterByPriceRange(minPrice, maxPrice);
  } else {
    query = await filterByCategoryIdAndPriceRange(
      categoryId,
      minPrice,
      maxPrice
    );
  }
  // else {
  //   query = await Products.findAll();
  // }
  res.status(200).json(query);
  //res.json({ Data: "this is product route" });
};

let filterByCategoryIdAndPriceRange = async (
  categoryId,
  minPrice,
  maxPrice
) => {
  let query = await Products.findAll({
    where: {
      categoryId: categoryId,
      price: {
        [sequelize.Op.gte]: minPrice || 0,
        [sequelize.Op.lte]: maxPrice || (await Products.max("price")),
      },
    },
  });
  return query;
};

let filterByPriceRange = async (minPrice, maxPrice) => {
  sequelize.Op.o;
  let filteredProducts = await Products.findAll({
    where: {
      price: {
        [sequelize.Op.gte]: minPrice || 0,
        [sequelize.Op.lte]: maxPrice || (await Products.max("price")),
      },
    },
  });
  return filteredProducts;
};
let getProductById = async (req, res, next) => {
  let reqId = req.params.productid;
  if (!reqId) {
    res.status(400).send("ID not passed");
  }
  let query = await Products.findOne({
    where: {
      id: reqId,
    },
  });
  res.json(query);
  //res.json({ Data: "this is product " + req.params.productid });
};

let addNewProduct = async (req, res, next) => {
  try {
    let resetquery = await Products.findAndCountAll();
    let query = await Products.create({
      id: resetquery.count + 1,
      name: req.body.name,
      price: req.body.price,
      categoryId: req.body.categoryId,
    });
    res.status(200).send(query);
  } catch (err) {
    res.status(500).send(err);
  }
};

let deleteProductByID = async (req, res, next) => {
  let query = await Products.destroy({
    where: {
      id: req.params.productId,
    },
  });
  //res.json(query);
  if (query) {
    let resetquery = await Products.findAndCountAll();
    res.send("deleted successfully\n reset count: " + resetquery.count);
  } else res.send("deletion Unsuccessfull");
};

module.exports = {
  deleteProductByID,
  addNewProduct,
  getAllProducts,
  getProductById,
};
