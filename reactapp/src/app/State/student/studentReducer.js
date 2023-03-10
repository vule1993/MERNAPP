//store : combination of reducers
//reducers : we'll have reduce functions to create new state
//initialize the state

import * as actionTypes from "../actionTypes";

let initialState = {
  studentName: "Default studentName",
  studentID: "Default studentID",
  email: "Default email address",
  mobile: "0070080091",
};

//store : upon looking into all dispatched actions will match given action type which is defined in each reducer
// and will return new state on the basis of changes done in swith statement

let studentReducer = (state = initialState, action) => {
  console.log("studentreducer ", action);

  switch (action.type) {
    case actionTypes.STUDENT_ADD:
      return action.payload;
    default:
      return state;
      break;
  }
};

export default studentReducer;
