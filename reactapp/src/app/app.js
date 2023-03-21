import React, { Component, useState } from "react";
import "./app.css";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Redirect,
  Route,
  Navigate,
} from "react-router-dom"; // browser router from react

import Header from "./Common/HeaderComponent";
import HomeComponent from "./Common/HomeComponent";
import Footer from "./Common/FooterComponent";
import About from "./Common/AboutComponent";
import NotFound from "./Common/NotFound";
import Student from "./ApplicationComponent/Student/StudentContainer";
import UserHook from "./ApplicationComponent/User/userHook";
import HobbiesComponent from "./ApplicationComponent/Hobbies/HobbiesComponent";
import ProductComponent from "./ApplicationComponent/Products/ProductComponent";
import DisplayProductsComponent from "./ApplicationComponent/Products/DisplayProductsComponent";
import CartComponent from "./ApplicationComponent/Cart/CartComponent";
import CheckOutComponent from "./ApplicationComponent/Checkout/CheckOutComponent";
import CouponComponent from "./ApplicationComponent/Coupon/CouponComponent";
import RecentOrdersComponent from "./ApplicationComponent/RecentOrders/RecentOrdersComponent";
import NotificationList from "./ApplicationComponent/Notification/NotificationList";
import "font-awesome/css/font-awesome.min.css";

export default function ApplicationComponent() {
  //virtual dom of component // 1 - state  ==>  2 - state
  const userName = useSelector((state) => state.userReducer.userName);
  console.log(userName);
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
        <Route path="/displayProduct" element={<DisplayProductsComponent />} />
        {/* <Route path="/Notification" element={<NotificationList />} /> */}

        {/* <Route path="/student" element={<Student />} /> */}
        <Route
          path="/checkout"
          element={
            userName === "Default UserName" ? (
              <Navigate to="/home" />
            ) : (
              <CheckOutComponent />
            )
          }
        />
        {/* <Route path="/hobbies" element={<HobbiesComponent />} /> */}
        <Route
          path="/cart"
          element={
            userName === "Default UserName" ? (
              <Navigate to="/home" />
            ) : (
              <CartComponent />
            )
          }
        />
        <Route
          path="/coupon"
          element={
            userName === "Default UserName" ? (
              <Navigate to="/home" />
            ) : (
              <CouponComponent />
            )
          }
        />
        <Route
          path="/recentOrders"
          element={
            userName === "Default UserName" ? (
              <Navigate to="/home" />
            ) : (
              <RecentOrdersComponent />
            )
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
