const express = require("express");
const cartRouter = express.Router({});
const cartDataModel = require("../DataModel/cartDataModel");

cartRouter.post("/api/savecart", async (req, res) => {
  const cartDbObj = await cartDataModel.findOne({
    "user._id": req.body.user._id,
  });
  if (!cartDbObj) {
    console.log("No cartitems Present, Adding / Inserting!");
    const cartObj = new cartDataModel(req.body);
    cartObj.save((error, cart) => {
      if (error) {
        console.log("error to save Cart to DB");
        res.send(error);
      } else {
        console.log("successfully save cart to DB");
        res.send(cart);
      }
    });
  } else {
    console.log("CartItems Present, Replacing / Updating!");
    cartDbObj.itemList = req.body.itemList;
    await cartDbObj.save();
    setTimeout(() => {
      res.json(cartDbObj);
    }, 1000);
  }
});

cartRouter.post("/api/getUserCart", (req, res) => {
  cartDataModel
    .findOne({ "user._id": req.body })
    .then((cartDbObj) => {
      if (cartDbObj) {
        res.json(cartDbObj);
      } else {
        res.status(404).send("User cart not found");
      }
    })
    .catch((err) => {
      console.log("Error while fetching user cart: ", err);
      res.status(500).send("Internal Server Error");
    });
});

module.exports = cartRouter;
