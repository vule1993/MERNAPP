import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Badge,
  ListGroup,
  Card, // import Card from react-bootstrap
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";
export default function CheckOutComponent(props) {
  const itemList = useSelector((state) => state.cartReducer.cartItems);
  const user = useSelector((state) => state.userReducer);
  const [showPaymentMessage, setShowPaymentMessage] = useState(false);

  //calculate the cart amount
  let total = 0;
  let cartQuantity = 0;
  if (itemList) {
    itemList.forEach((item) => {
      total += item.price * item.quantity;
      cartQuantity += 1;
    });
  }
  const paymentHandler = () => {
    setShowPaymentMessage(true);
  };

  return (
    <>
      <Container>
        {showPaymentMessage ? (
          <>
            <div className="py-3 text-center">
              <h2>Payment</h2>
            </div>
            <div className="py-3 text-center">
              <h4>
                Thank you for the payment, your items are being processed!
              </h4>
            </div>
          </>
        ) : (
          <>
            <div className="py-3 text-center">
              <h2>Checkout</h2>
            </div>
            <Row>
              <Col md={6} className="order-md-2 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Your cart</span>
                  <Badge variant="secondary" pill>
                    {cartQuantity}
                  </Badge>
                </h4>
                <ListGroup className="mb-3">
                  <ListGroup.Item className="d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">Product name</h6>
                    </div>
                    <div>
                      <h6 className="my-0">Price</h6>
                    </div>
                    <div>
                      <h6 className="my-0">Quantity</h6>
                    </div>
                    <div>
                      <h6 className="my-0">Total</h6>
                    </div>
                  </ListGroup.Item>
                  {itemList &&
                    itemList.map((item) => {
                      return (
                        <ListGroup.Item className="d-flex justify-content-between lh-condensed">
                          <span className="text-muted">{item.name}</span>
                          <span className="text-muted">${item.price}</span>
                          <span className="text-muted">{item.quantity}</span>
                          <span className="text-muted">
                            ${item.price * item.quantity}
                          </span>
                        </ListGroup.Item>
                      );
                    })}
                  <ListGroup.Item className="d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Promo code</h6>
                      <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">-$5</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>${total}</strong>
                  </ListGroup.Item>
                </ListGroup>
                <Card className="p-2">
                  <Card.Body>
                    <InputGroup>
                      <FormControl placeholder="Promo code" />
                      <InputGroup>
                        <Button variant="secondary">Redeem</Button>
                      </InputGroup>
                    </InputGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="order-md-1">
                <h4 className="mb-3">Billing address</h4>
                <h5 className="mb-3">
                  Your order will be delivered to the following address
                </h5>
                <ListGroup.Item className="d-flex justify-content-between lh-condensed">
                  <div>
                    <h5 className="my-0">Customer Name</h5>
                    <h6 className="text-muted">{user.userName}</h6>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between lh-condensed">
                  <div>
                    <h5 className="my-0">Address</h5>
                    <h6 className="text-muted">{user.street}</h6>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between lh-condensed">
                  <div>
                    <h5 className="my-0">Phone Number</h5>
                    <h6 className="text-muted">{user.mobile}</h6>
                  </div>
                </ListGroup.Item>
              </Col>
            </Row>
          </>
        )}
        <div className="py-3 text-center">
          <Button
            class="btn btn-primary btn-lg btn-block"
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
