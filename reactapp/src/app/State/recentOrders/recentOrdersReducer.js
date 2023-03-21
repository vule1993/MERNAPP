import {
  SAVE_RECENT_ORDER,
  CANCEL_RECENT_ORDER,
  GET_RECENT_ORDERS,
  EMPTY_RECENT_ORDERS,
  REORDER_RECENT_ORDER,
} from "../actionTypes";

const initialState = {
  orders: [],
  cart: [],
};

const recentOrdersReducer = (state = initialState, action) => {
  console.log("recentOrders Reducer", state, action);
  switch (action.type) {
    case SAVE_RECENT_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case CANCEL_RECENT_ORDER:
      return {
        ...state,
        orders: state.orders.map((order) => {
          if (order._id === action.payload) {
            return { ...order, orderStatus: "cancelled" };
          } else {
            return order;
          }
        }),
      };
    case REORDER_RECENT_ORDER:
      return {
        ...state,
        // Merge the reordered items with the existing items in the cart
        cart: [...state.cart, ...action.payload.items],
      };
    case EMPTY_RECENT_ORDERS:
      return {
        ...state,
        orders: [],
      };
    case GET_RECENT_ORDERS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default recentOrdersReducer;
