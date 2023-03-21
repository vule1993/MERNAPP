const express = require("express");
const recentOrdersRouter = express.Router({});
const recentOrdersModel = require("../DataModel/recentOrdersModel");

//Save new order
recentOrdersRouter.post("/api/saveRecentOrder", (req, res) => {
  let { userId, order } = req.body;
  const recentOrderObj = new recentOrdersModel({ userId, order });
  recentOrderObj.save((error, recentOrder) => {
    if (error) {
      res.send(error);
    } else {
      console.log("add new product", recentOrder);
      res.send(recentOrder);
    }
  });
});

recentOrdersRouter.post("/api/recentOrders", (req, res) => {
  const { userId } = req.body;
  recentOrdersModel
    .find({ userId: userId })
    .then((order) => {
      if (order) {
        res.json(order);
        console.log("order found from recentOrdersRouter", order);
      } else {
        res.status(404).send("recent order is not found");
      }
    })
    .catch((error) => {
      console.log("Error while fetching recent orders: ", error);
      res.status(500).send("Internal Server Error");
    });
});

//cancel order route handler:
recentOrdersRouter.post("/api/cancelOrder", (req, res) => {
  console.log(req.body);
  let { orderId, orderStatus } = req.body;
  if (!orderId || !orderStatus) {
    return res.status(400).send("Order ID or order status is missing");
  }

  // Calculate the time 48 hours ago from now
  const fortyEightHoursAgo = new Date(Date.now() - 48 * 60 * 60 * 1000);

  recentOrdersModel
    .findOneAndUpdate(
      { _id: orderId, dateTime: { $gte: fortyEightHoursAgo } },
      { orderStatus },
      { new: true }
    )
    .then((updatedOrder) => {
      if (!updatedOrder) {
        return res
          .status(400)
          .send("Order cannot be cancelled as it is more than 48 hours old");
      }
      res.status(200).json(updatedOrder);
    })
    .catch((error) => {
      console.log("Error while fetching recent orders: ", error);
      res.status(500).send("Internal Server Error");
    });
});
module.exports = recentOrdersRouter;

// recentOrdersRouter.post("/api/cancelOrder", (req, res) => {
//   console.log(req.body);
//   let { orderId, orderStatus } = req.body;
//   if (!orderId || !orderStatus) {
//     return res.status(400).send("Order ID or order status is missing");
//   }
//   recentOrdersModel
//     .findOneAndUpdate({ _id: orderId }, { orderStatus }, { new: true })
//     .then((updatedOrder) => {
//       res.status(200).json(updatedOrder);
//     })
//     .catch((error) => {
//       console.log("Error while fetching recent orders: ", error);
//       res.status(500).send("Internal Server Error");
//     });
// });
module.exports = recentOrdersRouter;
