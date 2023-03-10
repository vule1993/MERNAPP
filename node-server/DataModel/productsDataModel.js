let mongooseObj = require("mongoose"), //importing the mongoose module object
  schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack8 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mern23");

let productsSchema = new schemaObj({
  name: { type: String, required: true },
  description: { type: String, required: true },
  categories: { type: String, required: true },
  price: { type: Number, required: true },
});

let productsModel = mongooseObj.model("products", productsSchema); //user - collection name

module.exports = productsModel; //this should be used in userRouter to build user api's
