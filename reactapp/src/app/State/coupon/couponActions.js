import { SAVE_COUPON, REDEEM_COUPON } from "../actionTypes";
import axios from "axios";
import react, { useState } from "react";

export const saveCouponToStore = (coupon) => {
  return {
    type: SAVE_COUPON,
    payload: coupon,
  };
};

export const redeemCouponToStore = (coupon) => {
  return {
    type: REDEEM_COUPON,
    payload: coupon,
  };
};

export const saveCouponToDB = (coupon) => {
  return (dispatch) => {
    axios
      .post("http://localhost:9000/coupon/api/savecoupon", coupon)
      .then((res, req) => {
        const newCoupon = res.data;
        console.log("New coupon will be added to the database", newCoupon);
        dispatch(saveCouponToStore(newCoupon));
      })
      .catch((error) => {
        console.log("failed to save coupon to Database", error);
      });
  };
};

export const redeemCouponToDB = (couponObj) => {
  return (dispatch) => {
    console.log("from redeemCouponToDB", couponObj);
    axios
      .post("http://localhost:9000/coupon/api/redeemcoupon", couponObj)
      .then((res) => {
        const redeemedCoupon = res.data;
        console.log("Successfully redeemed the coupon", redeemedCoupon);
        console.log(couponObj.totalAmount);
        dispatch(redeemCouponToStore(redeemedCoupon));
        const discountAmount = calculateDiscountAmount(
          couponObj.totalAmount,
          redeemedCoupon.couponValue
        );
        const newTotalAmount = calculateNewTotalAmount(
          couponObj.totalAmount,
          discountAmount
        );

        couponObj.setCouponCode(redeemedCoupon.couponCode);
        couponObj.setTotalAmount(newTotalAmount);
        couponObj.setAmountDiscount(discountAmount);
        couponObj.setCouponValue(redeemedCoupon.couponValue);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("Coupon is not valid");
        } else if (error.response.status === 400) {
          alert("Coupon already redeemed");
        } else {
          alert("Failed to redeem coupon");
        }
      });
  };
};

const calculateNewTotalAmount = (totalAmount, discountAmount) => {
  return totalAmount - discountAmount;
};
const calculateDiscountAmount = (totalAmount, coupon) => {
  return totalAmount * (coupon / 100);
};
