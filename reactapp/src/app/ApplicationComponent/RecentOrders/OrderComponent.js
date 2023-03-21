import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import {
  cancelOrderDB,
  getRecentOrders,
} from "../../State/recentOrders/recentOrdersActions";
import { addToCart } from "../../State/cart/cartActions";
import { ADD_NOTIFICATION } from "../../State/actionTypes";
import { addNotification } from "../../State/notification/notificationActions";
import uniqid from "uniqid";

export default function OrderComponent(props) {
  const ordersData = useSelector((state) => state.recentOrdersReducer.orders);
  let order = ordersData.find((order) => order._id === props.orderId);

  const dispatch = useDispatch();

  const cancelOrderHandler = (orderId) => {
    console.log("cancelOrderHandler called.");
    dispatch(cancelOrderDB(orderId, "cancelled"));
    dispatch(
      addNotification({
        id: uniqid(),
        text: `order id ${orderId} has been cancelled`,
        isRead: false,
        path: "/recentOrders",
        properties: {},
      })
    );
  };

  const reOrderHandler = () => {
    console.log("reOrderHandler called.");
    order.order &&
      order.order.map((item) => {
        dispatch(addToCart(item));
      });
  };

  return (
    <>
      <tr key={order._id}>
        <td>{order._id}</td>
        <td>
          {order.order &&
            order.order.map((item, index) => (
              <div key={index}>
                <MDBIcon fas icon="circle me-2" style={{ color: "#fdd8d2" }} />
                <h6>{item.name}</h6>
              </div>
            ))}
        </td>
        <td>{order.dateTime}</td>
        <td>{order.orderStatus}</td>
        <td>
          <MDBBtn color="primary" onClick={() => cancelOrderHandler(order._id)}>
            Cancel
          </MDBBtn>
          <MDBBtn color="danger" onClick={reOrderHandler}>
            Reorder
          </MDBBtn>
        </td>
      </tr>
    </>
  );
}
