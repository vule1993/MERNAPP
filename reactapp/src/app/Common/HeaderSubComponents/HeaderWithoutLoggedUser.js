import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";

export default function HeaderWithoutLoggedUser() {
  return (
    <div>
      <NavLink to="/home" className="button" activeclassname="success">
        Home{" "}
      </NavLink>
      <NavLink to="/user" className="button" activeclassname="success">
        User{" "}
      </NavLink>
      <NavLink to="/about" className="button" activeclassname="success">
        About{" "}
      </NavLink>
    </div>
  );
}
