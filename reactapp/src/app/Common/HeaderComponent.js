import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import NotificationList from "../ApplicationComponent/Notification/NotificationList";

let Header = (props) => {
  const navStyle = {
    display: "inline-block",
    marginRight: "10px",
    float: "right",
  };
  let navigate = useNavigate();

  const userName = useSelector((state) => state.userReducer.userName);

  return (
    <>
      Hi <b>{userName + ", "}</b> Welcome to SynergisticIT Shopping Cart
      {userName == "" ? <b> Please Login to see other features</b> : ""}
      <div>
        <NavLink to="/home" className="button" activeclassname="success">
          Home{" "}
        </NavLink>
        <NavLink to="/user" className="button" activeclassname="success">
          User{" "}
        </NavLink>
        <NavLink to="/product" className="button" activeclassname="success">
          Product Management{" "}
        </NavLink>
        <NavLink
          to="/displayProduct"
          className="button"
          activeclassname="success"
        >
          Products{" "}
        </NavLink>
        <NavLink to="/coupon" className="button" activeclassname="success">
          Coupon Generator{" "}
        </NavLink>
        <NavLink
          to="/recentOrders"
          className="button"
          activeclassname="success"
        >
          Recent Orders{" "}
        </NavLink>
        <NavLink to="/about" className="button" activeclassname="success">
          About{" "}
        </NavLink>
        <NavLink to="/cart" className="button" activeclassname="success">
          Cart{" "}
        </NavLink>
        {userName !== "Default UserName" ? (
          <div style={navStyle}>
            <NotificationList />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

let mapStateToProps = (state) => {
  //store
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, null)(Header);

//export default Header;
