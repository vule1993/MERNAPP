//store : combination of reducers
//reducers : we'll have reduce functions to create new state
//initialize the state

import { USER_ADD, USER_UPDATE, USER_GET } from "../actionTypes";

let initialState = {
  userName: "Default UserName",
  password: "Default Password",
  street: "Default Address",
  mobile: "0070080091",
};

//store : upon looking into all dispatched actions will match given action type which is defined in each reducer
// and will return new state on the basis of changes done in swith statement

let userReducer = (state = initialState, action) => {
  console.log("userReducer ", action);

  switch (action.type) {
    case USER_ADD:
      return action.payload;

    case USER_UPDATE:
      return { ...state, userName: action.payload.UserName };

    case USER_GET:
      return state;

    default:
      return state;
      break;
  }
};

export default userReducer;
