import React from "react";
import NavBar from "../sidebar/NavBar";
import SideBarEx from "../sidebar/SideBarEx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function home() {
  return (
    <>
      <Router>
        <NavBar />
        <SideBarEx />
      </Router>
    </>
  );
}