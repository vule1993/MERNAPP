import { PRODUCTS_SAVE, PRODUCTS_GET } from "../actionTypes";
import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "../actionTypes";

const initialState2 = {
  loading: false,
  data: [],
  error: "",
};

const initialState = {
  name: "default",
  description: "product description",
  categories: "No Categories",
  price: 0,
};

export const productsReducer = (state = initialState, action) => {
  console.log("Action: ", action); // add this line
  switch (action.type) {
    case PRODUCTS_SAVE:
      return action.payload;
    case PRODUCTS_GET:
      return state;
    default:
      return state;
  }
};

export const displayProductsReducer = (state = initialState2, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
