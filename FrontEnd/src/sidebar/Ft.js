import React from "react";

function Logo() {
  return (
    <> 
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="http://cit.ctu.edu.vn//">
          Can Tho University
        </a>
      </div>
    </>
  );
}

export default Logo;
