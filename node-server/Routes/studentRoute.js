const app = require("express");
const studentRouter = app.Router({}); //it is top level segregation of router (which will make route table for end points)
let studentDataModel = require("../DataModel/studentDataModel"); //mongoose data model for user collection

//req.query - get
//req.body - post >  {"userName":"Default UserName","password":"Default Password","street":"Default Address","mobile":"0070080091"}

studentRouter.post("/api/add", (req, res) => {
  //localhost:9000/user/signinup
  console.log("student body", req.body);

  studentDataModel.findOne(
    { studentName: req.body.studentName },
    (err, data) => {
      if (err) {
        console.log("err while searching the user - ", err);
        res.send("err while searching the user");
      } else if (data) {
        //sign in case
        res.send(data);
      } else {
        //sign up case
        let modelObj = new studentDataModel(req.body); //creating model instance of user

        console.log(modelObj);

        modelObj.save((errr, newstudent) => {
          if (errr) {
            console.log("err while searching the user - ", errr);
            res.send("err while searching the user");
          } else {
            //newuser should contain _id - coming from mongodb
            console.log("newStudent ", newstudent);
            res.send(newstudent);
          }
        });
      }
    }
  );
});

module.exports = studentRouter;
