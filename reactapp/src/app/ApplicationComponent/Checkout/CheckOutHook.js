import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
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
import { redeemCouponToDB } from "../../State/coupon/couponActions";

export default function CheckOutHook() {
  const itemList = useSelector((state) => state.cartReducer.cartItems);
  const user = useSelector((state) => state.userReducer);
  const [showPaymentMessage, setShowPaymentMessage] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [amountDiscount, setAmountDiscount] = useState(0);
  const [couponValue, setCouponValue] = useState(0);

  let couponCodeRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    let cartQuantity = 0;

    if (itemList) {
      itemList.forEach((item) => {
        total += item.price * item.quantity;
        cartQuantity += item.quantity;
      });
    }

    setTotalAmount(total);
    setCartQuantity(cartQuantity);
  }, [itemList]);

  // const paymentHandler = () => {
  //   setShowPaymentMessage(true);
  // };

  const couponHandler = (evt) => {
    const couponCode = couponCodeRef.current.value;
    const couponObj = {
      couponCode: couponCode,
      totalAmount: totalAmount,
      setTotalAmount: setTotalAmount,
      setCouponCode: setCouponCode,
      setAmountDiscount: setAmountDiscount,
      setCouponValue: setCouponValue,
    };
    // alert(JSON.stringify(couponObj));
    dispatch(redeemCouponToDB(couponObj));
    evt.preventDefault();
  };

  return (
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
                  <ListGroup.Item
                    className="d-flex justify-content-between lh-condensed"
                    key={item._id}
                  >
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
                <h6 className="my-0">Coupon </h6>
                <small>
                  {couponCode} - {couponValue}%
                </small>
              </div>
              <span className="text-success">-${amountDiscount}</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${totalAmount}</strong>
            </ListGroup.Item>
          </ListGroup>
          <Card className="p-2">
            <Card.Body>
              <InputGroup>
                <FormControl ref={couponCodeRef} placeholder="Promo code" />
                <InputGroup>
                  <Button variant="secondary" onClick={couponHandler}>
                    Redeem
                  </Button>
                </InputGroup>
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="order-md-1">
          <h4 className="mb-3">Shipping address</h4>
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
  );
}
