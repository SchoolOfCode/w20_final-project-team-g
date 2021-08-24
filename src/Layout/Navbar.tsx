// import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import { UserContext } from "../Store/UserContext";
import { useAuthState } from "react-firebase-hooks/auth";

import React, { useContext } from "react";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
import Reset from "../Components/Login/Reset";
import Dashboard from "../Components/Login/Dashboard";
import { auth } from "../utilities/firebase";
import { directive } from "@babel/types";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    userProfile: { name, email, uniqueID },
  } = useContext(UserContext);
  // console.log(user ? "yes" : "no");
  if (user) {
    return (
      <>
        <nav>
          <>
            <div className="loginState">{user && <Dashboard></Dashboard>}</div>
          </>
          <ul>
            <li>
              <Link to="/">Kanban</Link>
            </li>

            <li>
              <Link to="/kumospace">Kumospace</Link>
            </li>

            <li>
              <Link to="/profile">My profile</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
  return (
    <div>
      <p>
        Please <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Navbar;

// import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";
// import Login from "../Login/Login";
// import Register from "../Login/Register";
// import Reset from "../Login/Reset";
// import Dashboard from "../Login/Dashboard";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <Router>
//         <Switch>
//           <Route exact path="/navbar" component={Login} />
//           <Route exact path="/register" component={Register} />
//           <Route exact path="/reset" component={Reset} />
//           <Route exact path="/dashboard" component={Dashboard} />
//         </Switch>
//       </Router>
//       <h1>Navbar</h1>
//     </div>
//   );
// };

// export default Navbar;
