import { SAVE_COUPON, REDEEM_COUPON } from "../actionTypes";

const initialState = {
  couponCode: "",
  couponValue: 0,
  couponUseTimes: 0,
};

const couponReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_COUPON:
      return action.payload;
    case REDEEM_COUPON:
      return {
        ...state,
        couponUseTimes: action.payload.couponUseTimes,
      };
    default:
      return state;
  }
};
export default couponReducer;
