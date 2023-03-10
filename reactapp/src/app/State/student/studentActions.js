import * as actionTypes from "../actionTypes";
import axios from "axios";

//action is the object that we'll dispatch from user component to store/reducer
export const addStudentToStore = (student) => {
  return {
    type: actionTypes.STUDENT_ADD,
    payload: student,
  };
};

//localhost:9000/user/signinup
export const addStudent = (student) => {
  // thunk - makes it behave synchronously
  return (dispatch) => {
    // here we go with ajax call : to save data to the server or fetch it from the server
    // using fetch method of react
    console.log("called by dispatch and synced by thunk");
    //dispatch(loading(true));

    axios
      .post(
        "http://localhost:9000/student/api/add", //hitting uri or api endpoint
        student //passing user object to be read as req.body
      )
      .then((ServerData) => {
        let signdStudent = ServerData.data;

        alert(JSON.stringify(signdStudent));

        //dispatching to store so that user state gets updated with new user
        dispatch(addStudentToStore(signdStudent));
      })
      .catch((err) => {
        console.log("err in login ", err);
      });
  };
};
