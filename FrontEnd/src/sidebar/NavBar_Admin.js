import React from "react";
import { FaUser } from "react-icons/fa";
import "../public/css/navbar.css";
import logo from "../public/image/logo.png";
function NavBar() {
  return (
    <>
      <div className="NavBar">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <a href="/admin">
          <button className="heading-Text">Dashboard</button>
        </a>
        <a href="/admin-exercise">
          <button className="heading-Text2">Exercise</button>
        </a>
        <div className="header">C Course</div>
        <a href="/dashboard" className="heading-User">
          <FaUser />
        </a>
      </div>
    </>
  );
}

export default NavBar;