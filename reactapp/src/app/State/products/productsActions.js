import axios from "axios";
import { PRODUCTS_SAVE } from "../actionTypes";
import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "../actionTypes";

export const saveProductsToState = (product) => {
  return {
    type: PRODUCTS_SAVE,
    payload: product,
  };
};

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductSuccess = (product) => {
  return { type: FETCH_PRODUCT_SUCCESS, payload: product };
};

export const fetchProductFailure = (err) => {
  return { type: FETCH_PRODUCT_FAILURE, payload: err };
};

export const saveProductsToDB = (product) => {
  // thunk - makes it behave synchronously
  return (dispatch) => {
    axios
      .post(
        "http://localhost:9000/product/api/add", //hitting uri or api endpoint
        product //passing user object to be read as req.body)
      )
      .then((res) => {
        const newProduct = res.data;
        alert(JSON.stringify(newProduct));
        console.log("Product Successfully added: ", newProduct);
        dispatch(saveProductsToState(newProduct));
      })
      .catch((err) => {
        console.log("err to save product ", err);
      });
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    // dispatch(fetchProductRequest());
    axios
      .get("http://localhost:9000/product/api/product")
      .then((res) => {
        const product = res.data;
        console.log("Products fetched successfully: ", product); // add this line
        dispatch(fetchProductSuccess(product));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchProductFailure(errorMsg));
      });
  };
};
