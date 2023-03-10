import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  UPDATE_ITEM_QUANTITY,
} from "../actionTypes";
const initialState = {
  //can also just create an array e.g. initialState = [] => so the code can be easier to write as do not need to return {...state, []}, simply return []
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item._id === product._id
      );
      if (existingItemIndex != -1) {
        const existingItem = state.cartItems[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex] = updatedItem;
        console.log("Updated cart items:", updatedCartItems);
        return { ...state, cartItems: updatedCartItems };
      } else {
        const newCartItem = { ...product, quantity: 1 };
        return { ...state, cartItems: [...state.cartItems, newCartItem] };
      }
    }
    case REMOVE_FROM_CART: {
      const updatedCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state, cartItems: updatedCartItems };
    }
    // case SAVE_CART: {
    //   return action.payload;
    // }
    case EMPTY_CART: {
      return { ...state, cartItems: [] };
    }
    case UPDATE_ITEM_QUANTITY: {
      const updatedCartItems = state.cartItems.map((item) => {
        if (item._id === action.payload.id) {
          //update the qty of item we want to update with selected id
          return { ...item, quantity: action.payload.qty }; //...item means {name, desc, rating, qty, price}
        }
        return item; //for all other items in cart do not update anything
      });
      return { ...state, cartItems: updatedCartItems };
    }
    default:
      return state;
  }
};
