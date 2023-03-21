//save user, get user, ....
//actions and reducers

//collection of action types to be used in actions and reducers

export const USER_ADD = "USER_ADD"; //add user should be the action

export const USER_GET = "USER_GET"; //add user should be the action
export const USER_UPDATE = "USER_UPDATE"; //add user should be the action

export const STUDENT_ADD = "STUDENT_ADD"; //add user should be the action

export const HOBBIES_SAVE = "HOBBIES_SAVE";

export const PRODUCTS_SAVE = "PRODUCTS_SAVE";
export const PRODUCTS_GET = "PRODUCTS_GET";

export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SAVE_CART = "SAVE_CART";
export const EMPTY_CART = "EMPTY_CART";
export const UPDATE_ITEM_QUANTITY = "UPDATE_ITEM_QUANTITY";

export const SAVE_COUPON = "SAVE_COUPON";
export const REDEEM_COUPON = "REDEEM_COUPON";

export const SAVE_RECENT_ORDER = "SAVE_RECENT_ORDER";
export const CANCEL_RECENT_ORDER = "CANCEL_RECENT_ORDER";
export const GET_RECENT_ORDERS = "GET_RECENT_ORDERS";
export const EMPTY_RECENT_ORDERS = "EMPTY_RECENT_ORDERS";
export const REORDER_RECENT_ORDER = "REORDER_RECENT_ORDER";

export const NOTIFICATION_MARK_AS_READ = "NOTIFICATION_MARK_AS_READ";
export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";
