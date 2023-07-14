const categories = require("./../model/Category");
const requestValidatorForCategoryName = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).send("category name key must be passed");
    return;
  }
  next(); //suppose there are other middleware calls after this then that will be executed.
};
const requestValidatorForCategoryId = async (req, res, next) => {
  if (!req.params.categoryId) {
    res.status(400).send("id must be passed");
    return;
  } else {
    let query = await categories.findByPk(req.params.categoryId);
    if (query) {
      next();
    } else {
      res.status(400).send({ message: "id not found in db" });
    }
  }
};

module.exports = {
  requestValidatorForCategoryId,
  requestValidatorForCategoryName,
};
