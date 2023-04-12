import React from "react";
import Signup from "../components/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import ForgotPassword from "../components/ForgotPassword";
import UpdateProfile from "../components/UpdateProfile";
import "../public/css/container.css";
import Dashboard from "../components/Dashboard";
import Logo from "../sidebar/Logo";
import Ft from "../sidebar/Ft";
import Admin from "../pages/Admin";
import AddDashboard from "../components/Add_Dashboard";
import UpdateDashboard from "../components/Update_Dashboard";
import DelDashboard from "../components/Del_Dashboard";
import AddExercise from "../components/Add_Exercise";
import UpdateExercise from "../components/Update_Exercise";
import DelExercise from "../components/Del_Exercise";
import AdminExercise from "../pages/Admin_Ex";
import Exercise from "../pages/Exercise";

const RouterDOM = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute path="/admin" component={Admin} />
          <PrivateRoute path="/admin-exercise" component={AdminExercise} />
          <PrivateRoute path="/add-dashboard" component={AddDashboard} />
          <PrivateRoute path="/update-dashboard" component={UpdateDashboard} />
          <PrivateRoute path="/delete-dashboard" component={DelDashboard} />

          <PrivateRoute path="/add-exercise" component={AddExercise} />
          <PrivateRoute path="/update-exercise" component={UpdateExercise} />
          <PrivateRoute path="/delete-exercise" component={DelExercise} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/exercise" component={Exercise} />
          <Container className="an">
            <Logo />
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <PrivateRoute path="/add-dashboard" component={AddDashboard} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </div>
          </Container>
        </Switch>
        {/* <Ft /> */}
      </AuthProvider>
    </Router>
  );
};
export default RouterDOM;