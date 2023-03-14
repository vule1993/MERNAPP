const express = require("express");
const couponRouter = express.Router({});
const couponDataModel = require("../DataModel/couponDataModel");

couponRouter.post("/api/savecoupon", (req, res) => {
  let modelObj = new couponDataModel(req.body);
  console.log(modelObj);
  modelObj.save((error, coupon) => {
    if (error) {
      res.send(error);
    } else {
      console.log("coupon added: ", coupon);
      res.send(coupon);
    }
  });
});

couponRouter.post("/api/redeemcoupon", (req, res) => {
  console.log("coupon code from couponRouter: ", req.body);
  const couponCode = req.body.couponCode;
  couponDataModel.findOne({ couponCode: couponCode }, (error, coupon) => {
    console.log("after findone", coupon);
    if (error) {
      console.log("failed to redeem coupon", error);
      res.status(500).send(err);
    } else if (!coupon) {
      console.log("coupon not found");
      res.status(404).send("Coupon not found");
    } else if (coupon.couponUseTimes === 0) {
      console.log("coupon already redeemed");
      res.status(400).send("Coupon already redeemed");
    } else {
      coupon.couponUseTimes -= 1;
      coupon.save((error, redeemedCoupon) => {
        if (error) {
          console.log("failed to save coupon", error);
          res.status(500).send(error);
        } else {
          console.log("coupon redeemed from couponRouter: ", redeemedCoupon);
          res.send(redeemedCoupon);
        }
      });
    }
  });
});
module.exports = couponRouter;
