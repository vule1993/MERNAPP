import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRecentOrdersFromDB } from "../../State/recentOrders/recentOrdersActions";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import OrderComponent from "./OrderComponent";

export default function RecentOrdersComponent() {
  const dispatch = useDispatch();
  const recentOrdersList = useSelector(
    (state) => state.recentOrdersReducer.orders
  );
  const userId = useSelector((state) => state.userReducer._id);

  // const [orderList, setOrderList] = useState(recentOrdersList);

  // useEffect(() => {
  //   setOrderList(recentOrdersList);
  // }, [recentOrdersList]);

  useEffect(() => {
    dispatch(getRecentOrdersFromDB(userId));
  }, [dispatch]);

  return (
    <>
      <div className="container py-4 px-2">
        <section className="vh-100" style={{ backgroundColor: "white" }}>
          <MDBContainer className="h-40">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol>
                <h2>Shopping Cart</h2>
                <MDBCard className="mb-4">
                  <MDBCardBody className="p-4">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Item List</th>
                          <th>Order Date</th>
                          <th>Order Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentOrdersList &&
                          recentOrdersList.map((order) => {
                            return (
                              <OrderComponent
                                orderId={order._id}
                                key={order._id}
                              />
                            );
                          })}
                      </tbody>
                    </table>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    </>
  );
}
