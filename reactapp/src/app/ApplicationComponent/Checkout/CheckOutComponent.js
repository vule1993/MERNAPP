import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import CheckOutHook from "./CheckOutHook";
import PaymentSuccess from "./PaymentSuccess";
export default function CheckOutComponent(props) {
  const [showPaymentMessage, setShowPaymentMessage] = useState(false);
  const paymentHandler = () => {
    setShowPaymentMessage(true);
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
