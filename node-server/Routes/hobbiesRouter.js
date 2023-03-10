const app = require("express");
let hobbiesModel = require("../DataModel/hobbiesDataModel");
const hobbiesRouter = app.Router({});

hobbiesRouter.post("/api/add", (req, res) => {
  console.log("Hobbies: ", req.body);
  let modelObj = new hobbiesModel(req.body); //creating model instance of user
  console.log(modelObj);
  modelObj.save((err, hobbies) => {
    if (err) {
      res.send(err);
    } else {
      console.log("add hobbies", hobbies);
      res.send(hobbies);
    }
  });
});

module.exports = hobbiesRouter;
