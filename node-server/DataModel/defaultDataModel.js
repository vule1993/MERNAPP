//create db connnection, datamodel and schema for datamodel to connect with mongodb server
let mongooseObj = require("mongoose"), //importing the mongoose module object
mongoSchema = mongooseObj.Schema;//using the schema class from mongoose

//creates db with name mernstack8 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mern23"); 

let defaultSchema = new mongoSchema({
    UserName : {type: String, required : true},
    SessionName : String,
    Address : String
},
{
    versionKey: false //default value is true : versionkey: true //error
})

let defaultModel = mongooseObj.model("first", defaultSchema); //firsts - pluralize the collection name

module.exports = defaultModel;// exports default model with all the functions of mongoose CRUD queries