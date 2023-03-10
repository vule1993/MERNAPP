//
//Hooks => Functions which implements react/redux or other library features in one module
//One Hook => One Module => One Feature

import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addUserToStore, signInSignUpUser } from "../../State/user/UserActions";

let UserHook = (props) => {
  //this.state = is applicable for class component description
  // this.state = {
  //     userName : props.user.UserName
  // }

  //declare variables in array destruct and assign a callback to update the state
  //let [userName, setUserName] = useState("Initial Value")
  //let [user, setUserObject] = useState({fName :"Initial Value", lName:"some value"})

  // let onTextChange = (evt)=>{
  //     //tightly coupled callback to render upon state change
  //     // this.setState({
  //     //     userName : evt.target.value
  //     // })

  //     setUserName(evt.target.value);

  //     //setUserObject({newUser})
  //     evt.preventDefault();
  // }

  //reference variable to create direct reference to html element
  let inputuserName = useRef(null);
  let inputPassword = useRef(null);
  let inputMobile = useRef(null);
  let inputStreet = useRef(null);

  let user = useSelector((state) => state.userReducer);

  console.log(user);

  let dispatch = useDispatch(); //mapDispatchToProps

  //useeffect - component did mount
  useEffect(() => {
    //code to initialize any server call or data-set
    inputuserName.current.value = user.userName;
    inputPassword.current.value = user.password;
    inputStreet.current.value = user.street;
    inputMobile.current.value = user.mobile;

    //as soon as we write to return a callback it behaves like component will unmount
    return () => {
      console.log("Component will unmount");
    };
  }, []); //if not initialzied with initial value [], then works like shouldComponentUpdate

  let readFormData = (evt) => {
    let user = {
      userName: inputuserName.current.value,
      password: inputPassword.current.value,
      street: inputStreet.current.value,
      mobile: inputMobile.current.value,
    };

    alert("Below user is going to sign in" + JSON.stringify(user));

    //dispatching to reducer
    dispatch(addUserToStore(user));

    //saving to db and then dispatching to store/reducer
    dispatch(signInSignUpUser(user));

    //stops the default post back of form control
    evt.preventDefault();
  };

  //virtual dom
  return (
    <>
      <h1>User Hook Component</h1>

      {/* uncontrolled component */}
      <form
        className={"form col-md-10 userHook"}
        onSubmit={readFormData}
        action="/api/saveUser"
      >
        <label>
          <b>User Name :</b>
          <input
            type="text"
            className={"form-control col-md-12"}
            ref={inputuserName}
            placeholder="Please enter user name"
            maxLength={20}
            required
          />
        </label>
        <br />
        <label>
          <b>Password :</b>
          <input
            type="password"
            className={"form-control col-md-12"}
            ref={inputPassword}
            placeholder="Please enter password"
            maxLength={20}
            required
          />
        </label>
        <br />
        <label>
          <b>Street :</b>
          <input
            type="text"
            className={"form-control col-md-12"}
            ref={inputStreet}
            placeholder="Please enter address"
            maxLength={20}
          />
        </label>
        <br />
        <label>
          <b>Mobile :</b>
          <input
            type="number"
            className={"form-control col-md-12"}
            ref={inputMobile}
            placeholder="Please enter mobile"
          />
        </label>

        <br />
        <input type="submit" className={"btn btn-primary"} value="Signin" />
      </form>
    </>
  );
};

export default UserHook;
