import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { saveCartToDB } from "../../State/cart/cartActions";
const voucher_codes = require("voucher-code-generator");
import { saveCouponToDB } from "../../State/coupon/couponActions";

// Coupon Page
// Create a component with Name - CouponComponent (Functional Component and Use Hooks)
// On the page add a Button - GenerateCoupon
// Upon Click Generate a random coupon of - 6 digits (basically a numeric random value)
// Dispatch this generated coupon using useDispatch
// Create a Coupon Reducer to have Coupon Value, Use Reducer to update the coupon value (useSelector coupon)
// Create action to pass coupon to reducer, with type and payload
export default function CouponComponent(props) {
  let [couponCode, setCouponCode] = useState("");

  const dispatch = useDispatch();
  let couponValue = useRef(null);
  let couponUseTimes = useRef(null);
  const readFormData = (evt) => {
    let couponCodeArray = voucher_codes.generate({ length: 12 });
    let couponCode = couponCodeArray[0];
    couponValue = couponValue.current.value ?? "";
    couponUseTimes = couponUseTimes.current.value ?? "";
    setCouponCode(couponCode);
    const coupon = {
      couponCode: couponCode,
      couponValue: couponValue,
      couponUseTimes: couponUseTimes,
    };
    dispatch(saveCouponToDB(coupon));
    alert("coupon: " + JSON.stringify(coupon));
    evt.preventDefault();
  };
  return (
    <>
      <h1>Coupon Generator</h1>
      <form className={"form col-md-10"} onSubmit={readFormData}>
        <label>
          Enter % discount(max = 99%)
          <input
            type="number"
            max="99"
            className={"form-control col-md-12"}
            placeholder="Enter coupon % discount value"
            ref={couponValue}
            required
          />{" "}
        </label>
        <br />
        <label>
          {" "}
          Enter coupon valid use times(max = 99):
          <input
            type="number"
            max="99"
            className={"form-control col-md-12"}
            placeholder="Enter coupon use times"
            ref={couponUseTimes}
            required
          />
        </label>
        <br />{" "}
        <input
          type="submit"
          className={"btn btn-primary"}
          value="Generate Coupon"
        />
      </form>
      <h5>Enjoy Your Discount Coupon: {couponCode}</h5>
    </>
  );
}
