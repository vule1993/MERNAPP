import axios from "axios";

import {
  SAVE_RECENT_ORDER,
  CANCEL_RECENT_ORDER,
  GET_RECENT_ORDERS,
  EMPTY_RECENT_ORDERS,
  REORDER_RECENT_ORDER,
} from "../actionTypes";

export const saveRecentOrder = (order) => {
  return {
    type: SAVE_RECENT_ORDER,
    payload: order,
  };
};

export const cancelRecentOrder = (orderId) => {
  return {
    type: CANCEL_RECENT_ORDER,
    payload: orderId,
  };
};

export const getRecentOrders = (userId) => {
  return {
    type: GET_RECENT_ORDERS,
    payload: { userId },
  };
};
export const emptyRecentOrders = () => {
  return {
    type: EMPTY_RECENT_ORDERS,
  };
};

export const reOrder = (order) => {
  return {
    type: REORDER_RECENT_ORDER,
    payload: order,
  };
};

export const saveRecentOrdersToDB = (order, userId) => {
  return (dispatch) => {
    console.log("saveRecentOrdersToDB dispatched");
    axios
      .post("http://localhost:9000/recentOrders/api/saveRecentOrder", {
        order,
        userId,
      })
      .then((res) => {
        const { order, userId } = res.data;
        alert(
          "The following recent order will be saved to DB" +
            JSON.stringify(order, userId)
        );
        dispatch(saveRecentOrder(order));
      })
      .catch((error) => {
        console.log("Failed to save recent Order to DB", error);
      });
  };
};

export const getRecentOrdersFromDB = (userId) => {
  return (dispatch) => {
    console.log("getRecentOrdersFromDB dispatched");
    console.log("userID from getRecentOrdersFromDB: ", userId);
    axios
      .post("http://localhost:9000/recentOrders/api/recentOrders", {
        userId: userId,
      })
      .then((res) => {
        const orders = res.data;
        console.log("recent orders from this user_id: ", orders);
        dispatch(emptyRecentOrders());
        if (orders) {
          orders.map((order) => {
            dispatch(saveRecentOrder(order));
          });
        } else {
          console.log("Error: recentOrders is undefined or null");
        }
      })
      .catch((error) => {
        console.log("Error While loading recentOrders ", error);
      });
  };
};
export const cancelOrderDB = (orderId, orderStatus) => {
  console.log("cancelOrderDB dispatched");
  return (dispatch) => {
    axios
      .post("http://localhost:9000/recentOrders/api/cancelOrder", {
        orderId: orderId,
        orderStatus: orderStatus,
      })
      .then((res) => {
        if (res.status === 200) {
          const { orderId, orderStatus } = res.data;
          console.log(
            `The following Order ${orderId} has been updated to status ${orderStatus}`
          );
          alert("Order has been successfully canceled.");
          dispatch(cancelRecentOrder(orderId));
        } else if (res.status === 400) {
          alert(res.data); // Display the error message sent by the server
        }
      })
      .catch((error) => {
        console.log("failed to cancel order DB: ", error);
        if (error.response && error.response.status === 400) {
          alert(error.response.data);
        } else {
          alert(
            "An error occurred while canceling the order. Please try again later."
          );
        }
      });
  };
};
