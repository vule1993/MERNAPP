import Student from "./StudentComponent";
import { connect } from "react-redux";

import {
  addStudent,
  addStudentToStore,
} from "../../State/student/studentactions";

//subsribing from store
let mapStateToProps = (state) => {
  //store
  return {
    User: state.studentReducer,
  };
};

//publishing to store
let mapDispatchToStore = (dispatch) => {
  return {
    addStudentToStore: (student) => {
      dispatch(addStudentToStore(student));
    },
    SaveStudentToDB: (student) => {
      dispatch(addStudent(student));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToStore)(Student);
