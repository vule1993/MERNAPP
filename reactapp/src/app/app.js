import React, { Component } from "react";
import "./app.css";
import {
  BrowserRouter as Router,
  Routes,
  Redirect,
  Route,
} from "react-router-dom"; // browser router from react

import Header from "./Common/HeaderComponent";
import HomeComponent from "./Common/HomeComponent";
import Footer from "./Common/FooterComponent";
import About from "./Common/AboutComponent";
import NotFound from "./Common/NotFound";
import Student from "./ApplicationComponent/Student/StudentContainer";
// import User from "./ApplicationComponent/User/UserContainer";
import UserHook from "./ApplicationComponent/User/userHook";
import HobbiesComponent from "./ApplicationComponent/Hobbies/HobbiesComponent";
import ProductComponent from "./ApplicationComponent/Products/ProductComponent";
import DisplayProductsComponent from "./ApplicationComponent/Products/DisplayProductsComponent";
import CartComponent from "./ApplicationComponent/Cart/CartComponent";
import CheckOutComponent from "./ApplicationComponent/Checkout/CheckOutComponent";
import CouponComponent from "./ApplicationComponent/Coupon/CouponComponent";
export default class ApplicationComponent extends Component {
  //virtual dom of component // 1 - state  ==>  2 - state
  render() {
    console.log("Render component");
    return (
      <Router>
        <Header />
        <Routes>
          <Route
            path="/home"
            element={<HomeComponent title={"Home Page Title"} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<UserHook />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/product" element={<ProductComponent />} />
          <Route
            path="/displayProduct"
            element={<DisplayProductsComponent />}
          />
          {/* <Route path="/student" element={<Student />} /> */}
          <Route path="/checkout" element={<CheckOutComponent />} />

          <Route path="/hobbies" element={<HobbiesComponent />} />
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/coupon" element={<CouponComponent />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}
