const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1/mern23");
const ItemSchema = new mongoose.Schema({
  itemId: String,
  name: String,
  categories: String,
  price: Number,
  quantity: Number,
});
const recentOrdersSchema = new Schema({
  userId: { type: String, required: true },
  order: { type: [ItemSchema], required: true },
  dateTime: { type: Date, default: Date.now() },
  orderStatus: {
    type: String,
    enum: ["processing", "cancelled", "delivered"],
    default: "processing",
  },
});

const RecentOrdersModel = mongoose.model("recentOrders", recentOrdersSchema);

module.exports = RecentOrdersModel;
