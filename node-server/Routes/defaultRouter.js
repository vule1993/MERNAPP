const express = require("express");
const router = express.Router({}); //caseSensitive: true//casesensitive, restriction
const defaultModel = require("../DataModel/defaultDataModel");
const path = require("path");

//get, put, post, delete etc

router.get("/default", (req, res) => {
  console.log(req.query);
  let mongodbObj = new defaultModel(req.query);

  mongodbObj.save((err, data) => {
    if (err) {
      console.log("err ", err);
      console.log("err while saving");
    } else {
      //_id will be created if it works
      res.send(data);
    }
  });
});

router.get("/all", (req, res) => {
  defaultModel.find((err, data) => {
    if (err) {
      console.log("err ", err);
      console.log("err while fetching");
    } else {
      //_id will be created if it works
      res.send(data);
    }
  });
});

router.get("/", function (req, res) {
  res.send("Hello World");
});

router.get("/hello", function (req, res) {
  res.send(
    `<h1>Welcome to the world of ExpressJS and NODEMON as dev depedency</h1>`
  );
});

router.get("/index", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "Public", "index.html"));
});

module.exports = router;
