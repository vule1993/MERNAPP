import axios from "axios";
import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SAVE_CART,
  UPDATE_ITEM_QUANTITY,
} from "../actionTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (item_id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item_id,
  };
};

// export const saveCart = (cart) => {
//   return {
//     type: SAVE_CART,
//     payload: cart,
//   };
// };

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

export const updateItemQuantity = (id, qty) => {
  return {
    type: UPDATE_ITEM_QUANTITY,
    payload: {
      id,
      qty: parseInt(qty),
    },
  };
};

export const saveCartToDB = (cart) => {
  return (dispatch) => {
    axios
      .post("http://localhost:9000/cart/api/savecart", cart)
      .then((res) => {
        const cartToBeSaved = res.data;
        alert(
          "the following cart will be save to database" +
            JSON.stringify(cartToBeSaved)
        );
        console.log("this card will be added to the DB", cartToBeSaved);
        // dispatch(saveCart(cartToBeSaved));
      })
      .catch((err) => {
        console.log("Failed to add cart to DB", err);
      });
  };
};

export const getUserCart = (userid) => {
  return (dispatch) => {
    console.log("getUserCart dispatched");
    axios
      .post("http://localhost:9000/cart/api/getUserCart", {
        "user._id": userid,
      })
      .then((res) => {
        const userCart = res.data;
        console.log("response - get user cart ", userCart);
        dispatch(emptyCart()); //remove the duplicacy first empty the cart
        if (userCart && userCart.itemList) {
          userCart.itemList.map((item) => {
            console.log("item in for of", item);
            dispatch(addToCart(item));
          });
        } else {
          console.log("Error: itemList is undefined or null");
        }
      })
      .catch((error) => {
        console.log("Error While loading userCart ", error);
      });
  };
};
