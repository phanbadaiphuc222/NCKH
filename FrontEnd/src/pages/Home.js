import React from "react";
import Sidebar from "../sidebar/SideBar";
import NavBar from "../sidebar/NavBar";
// import Widget from 'rasa-webchat';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function home() {

  const id = null;
  return (
    <>
      <Router>
        <NavBar />
        <div className="display1">
          <Sidebar />
        </div>
      </Router>
    </>
  );
}
