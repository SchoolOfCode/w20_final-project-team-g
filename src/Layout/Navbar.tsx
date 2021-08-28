// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { UserContext } from "../Store/UserContext";
import { useAuthState } from "react-firebase-hooks/auth";

import React, { useContext } from "react";
import Dashboard from "../Components/Login/Dashboard";
import { auth } from "../utilities/firebase";

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
