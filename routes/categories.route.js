let express = require("express");
let categoryRouter = express.Router();
let categoryController = require("./../controller/category.controller");
let requestValidator = require("./../middlewares/RequestValidator");
categoryRouter.get("/", categoryController.getAllCategories);

categoryRouter.get(
  "/:categoryId",
  [requestValidator.requestValidatorForCategoryId],
  categoryController.getCateogryByID
);

categoryRouter.post(
  "/",
  [requestValidator.requestValidatorForCategoryName],
  categoryController.addNewCategory
);

categoryRouter.delete(
  "/:categoryId",
  [requestValidator.requestValidatorForCategoryId],
  categoryController.deleteCateogryByID
);

categoryRouter.put(
  "/:categoryId",
  [
    requestValidator.requestValidatorForCategoryId,
    requestValidator.requestValidatorForCategoryName,
  ],
  categoryController.updateCategoryById
);

module.exports = categoryRouter;
