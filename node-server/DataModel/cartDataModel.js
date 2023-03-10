const mongooseObj = require("mongoose"),
  schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mern23");

const cartSchema = new schemaObj({
  itemList: { type: Object, require: true },
  user: { type: Object, required: true },
});

const userModel = mongooseObj.model("cart", cartSchema);

module.exports = userModel;
