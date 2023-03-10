import * as actionTypes from "../actionTypes";

const initialState = {
  hobbies: "",
};

const hobbiesReducer = (state = initialState, action) => {
  switch (action) {
    case actionTypes.HOBBIES_SAVE:
      return action.payload;
    default:
      return state;
  }
};
export default hobbiesReducer;
