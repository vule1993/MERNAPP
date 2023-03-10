const app = require("express");
const productsRouter = app.Router({});
let productsDataModel = require("../DataModel/productsDataModel");

productsRouter.post("/api/add", (req, res) => {
  console.log("Product: ", req.body);

  let productObj = new productsDataModel(req.body);

  console.log(productObj);

  productObj.save((err, product) => {
    if (err) {
      res.send(err);
    } else {
      console.log("add new product", product);
      res.send(product);
    }
  });
});

productsRouter.get("/api/product", (req, res) => {
  productsDataModel.find((err, productList) => {
    if (err) {
      res.send(err);
    } else {
      console.log("product Lists: ", productList);
      res.send(productList);
    }
  });
});
module.exports = productsRouter;
