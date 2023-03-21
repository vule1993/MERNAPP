import {
  NOTIFICATION_MARK_AS_READ,
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from "../actionTypes";
const initialState = [
  {
    id: 1,
    text: "To add more products to your cart...",
    isRead: false,
    path: "/displayProduct",
    properties: {},
  },
  {
    id: 2,
    text: "To review your cart...",
    isRead: false,
    path: "/cart",
    properties: {},
  },
  {
    id: 3,
    text: "To review your cart...",
    isRead: false,
    path: "/cart",
    properties: {},
  },
  {
    id: 4,
    text: "To Make Payment from Payment Page....",
    isRead: false,
    path: "/checkout",
    properties: {},
  },
  {
    id: 5,
    text: "To Assist Them for cancel/reorder....",
    isRead: false,
    path: "/recentOrders",
    properties: {},
  },
];

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION_MARK_AS_READ:
      return state.map((noti) => {
        if (noti.id === action.payload) {
          return { ...noti, isRead: true };
        }
        return noti;
      });
    case REMOVE_NOTIFICATION:
      return state.filter((noti) => noti.id !== action.payload);
    case ADD_NOTIFICATION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default notificationReducer;
