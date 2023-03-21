import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CheckOutHook from "./CheckOutHook";
import PaymentSuccess from "./PaymentSuccess";
import { saveRecentOrdersToDB } from "../../State/recentOrders/recentOrdersActions";
import { emptyCart, saveCartToDB } from "../../State/cart/cartActions";
export default function CheckOutComponent(props) {
  const [showPaymentMessage, setShowPaymentMessage] = useState(false);
  const itemList = useSelector((state) => state.cartReducer.cartItems);
  const cart = useSelector((state) => state.cartReducer);

  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const paymentHandler = () => {
    dispatch(saveRecentOrdersToDB(itemList, user._id));
    setShowPaymentMessage(true);
    dispatch(emptyCart());
    console.log(cart);
    dispatch(saveCartToDB(cart));
  };

  return (
    <>
      <Container>
        {showPaymentMessage ? <PaymentSuccess /> : <CheckOutHook />}
        <div className="py-3 text-center">
          <Button
            className="btn btn-primary btn-lg btn-block"
            onClick={paymentHandler}
            type="submit"
          >
            Process The Payment
          </Button>
        </div>
      </Container>
    </>
  );
}
