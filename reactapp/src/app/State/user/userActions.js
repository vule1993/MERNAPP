//we'll create action object essentially to adduser to store when it is invoked on UI

import { USER_ADD } from "../actionTypes";
import axios from "axios";
import { getUserCart } from "../cart/cartActions";

//action is the object that we'll dispatch from user component to store/reducer
export const addUserToStore = (user) => {
  return {
    type: USER_ADD,
    payload: user,
  };
};

//localhost:9000/user/signinup
export const signInSignUpUser = (user) => {
  // thunk - makes it behave synchronously
  return (dispatch) => {
    // here we go with ajax call : to save data to the server or fetch it from the server
    // using fetch method of react
    console.log("called by dispatch and synced by thunk");
    //dispatch(loading(true));

    axios
      .post(
        "http://localhost:9000/user/api/signinup", //hitting uri or api endpoint
        user //passing user object to be read as req.body
      )
      .then((ServerData) => {
        let signUser = ServerData.data;

        alert(JSON.stringify(signUser._id));
        // console.log(signUser._id);
        //dispatching to store so that user state gets updated with new user
        dispatch(addUserToStore(signUser));
        dispatch(getUserCart(signUser._id));
      })
      .catch((err) => {
        console.log("err in login ", err);
      });
  };
};
