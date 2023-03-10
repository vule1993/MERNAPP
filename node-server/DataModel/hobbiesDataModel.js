let mongooseObj = require("mongoose"), //importing the mongoose module object
  schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack8 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mern23");

let hobbiesSchema = new schemaObj({
  hobbies: { type: String, required: true },
});

let hobbiesModel = mongooseObj.model("hobbies", hobbiesSchema); //user - collection name, pluralised by mongodb

module.exports = hobbiesModel; //this should be used in userRouter to build user api's
