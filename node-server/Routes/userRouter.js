// const app = require("express");
// const userRouter = app.Router({}); //it is top level segregation of router (which will make route table for end points)
// let userDataModel = require("../DataModel/userDataModel"); //mongoose data model for user collection

// //req.query - get
// //req.body - post >  {"userName":"Default UserName","password":"Default Password","street":"Default Address","mobile":"0070080091"}

// userRouter.post("/api/signinup", (req, res) => {
//   //localhost:9000/user/signinup
//   console.log("userbody: ", req.body);

//   userDataModel.findOne({ userName: req.body.userName }, (err, user) => {
//     if (err) {
//       console.log("err while searching the user - ", err);
//       res.send("err while searching the user");
//     } else if (user) {
//       //sign in case
//       res.send(user);
//     } else {
//       //sign up case
//       let modelObj = new userDataModel(req.body); //creating model instance of user

//       console.log(modelObj);

//       modelObj.save((errr, newuser) => {
//         if (errr) {
//           console.log("err while searching the user - ", errr);
//           res.send("err while searching the user");
//         } else {
//           //newuser should contain _id - coming from mongodb
//           console.log("newUser ", newuser);
//           res.send(newuser);
//         }
//       });
//     }
//   });
// });
// // userRouter.use((express.static(path.join(__dirname, "..", "..", "reactapp"))));
// // userRouter.get("*", (req, res) => {
// //     res.sendFile(path.join(__dirname, "..", "..", "reactapp", "src", "app", ""))
// //   });

// module.exports = userRouter;

let app = require("express");
let userRouter = app.Router({}); //it is top level segregation of router (which will make route table for end points)

let userDataModel = require("../DataModel/userDataModel"); //mongoose data model for user collection

//req.query - get
//req.body - post >  {"userName":"Default UserName","password":"Default Password","street":"Default Address","mobile":"0070080091"}

userRouter.post("/api/signinup", (req, res) => {
  //localhost:9000/user/signinup
  console.log("user body", req.body);

  userDataModel.findOne({ userName: req.body.userName }, (err, user) => {
    if (err) {
      console.log("err while searching the user - ", err);
      res.send("err while searching the user");
    } else if (user) {
      //sign in case
      res.send(user);
    } else {
      //sign up case
      let modelObj = new userDataModel(req.body); //creating model instance of user

      console.log(modelObj);

      modelObj.save((errr, newuser) => {
        if (errr) {
          console.log("err while searching the user - ", errr);
          res.send("err while searching the user");
        } else {
          //newuser should contain _id - coming from mongodb
          console.log("newUser ", newuser);
          res.send(newuser);
        }
      });
    }
  });
});

module.exports = userRouter;
