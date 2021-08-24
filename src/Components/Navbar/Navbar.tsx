import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Reset from "../Login/Reset";
import Dashboard from "../Login/Dashboard";

const Navbar = () => {
  return (
    <div className="navbar">
      <Router>
        <Switch>
          <Route exact path="/navbar" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
      <h1>Navbar</h1>
    </div>
  );
};

export default Navbar;
