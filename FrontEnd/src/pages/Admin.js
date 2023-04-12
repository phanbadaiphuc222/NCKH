import React from "react";
import NavBar_Admin from "../sidebar/NavBar_Admin";
import { BrowserRouter as Router } from "react-router-dom";
import AdminDashboard from "../components/Admin_Dashboard";
import "../public/css/adform.css";

export default function home() {
  return (
    <>
      <Router>
        <NavBar_Admin />
        <div className="bd-admin1">
          <a href="http://localhost:3000/add-dashboard">
            <button className="button">Add</button>
          </a>
          <a href="http://localhost:3000/update-dashboard">
            <button className="button button-mid">Update</button>
          </a>
          <a href="http://localhost:3000/delete-dashboard">
            <button className="button">Delete</button>
          </a>
        </div>
        <AdminDashboard />
      </Router>
    </>
  );
}


