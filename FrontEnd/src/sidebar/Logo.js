import React from "react";
import logo from "../public/image/logo.png";

function Logo() {
  return (
    <>
      <div className="mt-3">
        <img className="logo" src={logo} alt="logo" />
      </div>
    </>
  );
}

export default Logo;
