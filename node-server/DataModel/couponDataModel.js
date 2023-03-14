const mongooseObj = require("mongoose"),
  schemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/mern23");

const couponSchema = new schemaObj({
  couponCode: { type: String, required: true },
  couponValue: Number,
  couponUseTimes: Number,
});

const couponDataModel = mongooseObj.model("coupon", couponSchema);

module.exports = couponDataModel;
