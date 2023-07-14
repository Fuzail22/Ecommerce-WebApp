let Categories = require("./../model/Category");
//let seqInstance = require("./../config/db.config");

let getAllCategories = async function (req, res, next) {
  let cats = await Categories.findAll();
  res.send(cats); //we can directly send the object without the need of converting it to json and sending it using res.write
  // res.writeHead(200, { "Content-Type": "application/json" }); //works even without this line. i.e., without specifing the content.
  // res.write(JSON.stringify(cats));
  // res.end();
  //   res.status(200).write("this is categories route");
  //   res.end();
  //res.status(200).json({ Data: "anb" });
};

let getCateogryByID = async function (req, res, next) {
  let reqid = req.params.categoryId;
  let query = await Categories.findOne({ where: { id: reqid } });
  res.json(query);
  // if (query) res.json(query);
  // else return res.json({ Response: "Invalid Request" });
  //res.status(200).write("this is for category " + req.params.category);
  //res.end();
  //res.status(200).json({ Data: "anb" });
};

let addNewCategory = async (req, res, next) => {
  try {
    let inp = req.body.name;
    // if (!inp) {
    //   res.status(400).send("name key not passed");
    //   return;
    // }
    let query = await Categories.create({
      name: inp,
    });
    res.status(201).send("Category added successful");
  } catch (err) {
    //console.log(err);
    res.status(400).send(err);
    //next(err);
  }
};

let deleteCateogryByID = async function (req, res, next) {
  let reqid = req.params.categoryId;
  let query = await Categories.destroy({ where: { id: reqid } });
  res.status(200).send("Deleted Successfully");
  // if (query) res.status(200).send("Deleted Successfully");
  // else return res.json({ Response: "Invalid Request" });
  //res.status(200).write("this is for category " + req.params.categoryId);
  //res.end();
  //res.status(200).json({ Data: "anb" });
};

let updateCategoryById = async (req, res, next) => {
  // if (!req.body.name) {
  //   res.status(500).send("Please pass the name in body");
  //   return;
  //   //res.end();
  // }
  try {
    await Categories.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: req.params.categoryId,
        },
      }
    );
    let updated = await Categories.findByPk(req.params.categoryId);
    res.status(200).send(updated);
    // res.writeHead(204, { "Content-Type": "application/json" });
    //res.write("Updated Succesfully");
    //res.end();
  } catch (err) {
    //console.log(err);
    res.status(400).send(err);
    //next(err);
  }
};

let all = {
  getAllCategories,
  getCateogryByID,
  addNewCategory,
  deleteCateogryByID,
  updateCategoryById,
};

module.exports = all;
