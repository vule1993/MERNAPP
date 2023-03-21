import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
export default function HeaderWithLoggedUser() {
  return (
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
      <NavLink to="/about" className="button" activeclassname="success">
        About{" "}
      </NavLink>
      <NavLink to="/cart" className="button" activeclassname="success">
        Cart{" "}
      </NavLink>
      <NavLink to="/Notification" className="button" activeclassname="success">
        Notification{" "}
      </NavLink>
    </div>
  );
}
