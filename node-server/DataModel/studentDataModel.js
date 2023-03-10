let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack8 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mern23"); 

let studentSchema = new schemaObj({
    studentName : {type: String, required : true},
    studentID: {type:String, required:true},
    email: String,
    mobile: Number
});

let studentModel = mongooseObj.model("student",studentSchema);//student - collection name, pluralised by mongodb

module.exports = studentModel;//this should be used in userRouter to build user api's