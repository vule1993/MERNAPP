console.log(
  "This file is used to bootstrap the entire react application in html root!!"
);

import React from "react"; // default import
import * as ReactDOM from "react-dom/client"; // importing all modules
import { Provider } from "react-redux"; // provider component will make sure that it wraps whole react appln and has store object in it
import store from "./app/State/store";

import ApplicationComponent from "./app/app"; //react application

//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //bootstrapping application
  <Provider store={store}>
    <ApplicationComponent />
  </Provider>
);
