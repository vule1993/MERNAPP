import axios from "axios";
import * as actionTypes from "../actionTypes";

export const saveHobbiesToStore = (hobbies) => {
  return {
    type: actionTypes.HOBBIES_SAVE,
    payload: hobbies,
  };
};

export const saveHobbiesToDB = (hobbies) => {
  //using thunk to let action creator return function/method instead of action
  return (dispatch) => {
    axios
      .post("http://localhost:9000/hobbies/api/add", hobbies)
      .then((res) => {
        const hobbiesData = res.data;
        alert(JSON.stringify(hobbiesData));
        dispatch(saveHobbiesToStore(hobbiesData));
      })
      .catch((err) => {
        console.log("error in save Hobbies", err);
      });
  };
};
