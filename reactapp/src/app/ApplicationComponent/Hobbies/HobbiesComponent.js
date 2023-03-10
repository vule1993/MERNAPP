import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  saveHobbiesToStore,
  saveHobbiesToDB,
} from "../../State/hobbies/hobbiesActions";

const HobbiesComponent = (props) => {
  const dispatchHobbies = useDispatch();
  let inputtedHobbies = useRef(null);

  let readFormData = (evt) => {
    let newHobbies = {
      hobbies: inputtedHobbies.current.value,
    };
    alert(
      "Below hobbies is going to update on your profile" +
        JSON.stringify(newHobbies)
    );

    dispatchHobbies(saveHobbiesToDB(newHobbies));

    //stops the default post back of form control
    evt.preventDefault();
  };

  return (
    <>
      <h1>Hobbies Component</h1>

      {/* uncontrolled component */}
      <form
        className={"form col-md-10 userHook"}
        onSubmit={readFormData}
        // action="/api/add"
      >
        <label>
          <b>Your Hobbies</b>
          <input
            type="text"
            className={"form-control col-md-12"}
            ref={inputtedHobbies}
            placeholder="Please enter your new hobbies"
            maxLength={20}
            required
          />
        </label>
        <input
          type="submit"
          className={"btn btn-primary"}
          value="Add Hobbies"
        />
      </form>
    </>
  );

  // let inputtedHobbies = useRef(null);
  // //   let currentHobbies = useSelector((state) => state.hobbiesReducer);
  // //   console.log(currentHobbies);

  // //   let dispatchHobbies = useDispatch(); //mapDispatchToProps

  // //   useEffect(() => {
  // //     inputtedHobbies.current.value = currentHobbies.hobbies;
  // //   }, []);

  // //   let readFormData = (evt) => {
  // //     let updateHobbies = inputtedHobbies.current.value;
  // //     alert(
  // //       "Below hobbies is going to update on your profile" +
  // //         JSON.stringify(updateHobbies)
  // //     );

  // //     dispatchHobbies(saveHobbiesToDB(updateHobbies));

  // //     //stops the default post back of form control
  // //     evt.preventDefault();
  // //   };

  // return (
  //   <>
  //     <h1>Hobbies Component</h1>
  //     <h2>Your Hobbies:</h2>
  //     {/* uncontrolled component */}
  // <form
  //   className={"form col-md-10 userHook"}
  //   onSubmit={readFormData}
  //   action="/api/saveHobbies"
  // >
  //   <label>
  //     <b>Your Hobbies:</b>
  //     <input
  //       type="text"
  //       className={"form-control col-md-12"}
  //       ref={inputtedHobbies}
  //       placeholder="Please enter your hobbies"
  //       maxLength={20}
  //       required
  //     />
  //   </label>
  //   <br />
  //   <input
  //     type="submit"
  //     className={"btn btn-primary"}
  //     value="updateHobbies"
  //   />
  // </form>
  //   </>
  // );
};

export default HobbiesComponent;
