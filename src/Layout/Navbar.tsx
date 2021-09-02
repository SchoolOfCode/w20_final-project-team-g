// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { UserContext } from '../Store/UserContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import FormModal from '../Components/Form/FormModal';
import React, { useContext } from 'react';
import Dashboard from '../Components/Login/Dashboard';
import { auth } from '../utilities/firebase';

import logo from '../images/kaizen-logo.png';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    userProfile: { name, email, uniqueID },
  } = useContext(UserContext);
  // console.log(user ? "yes" : "no");
  if (user) {
    return (
      <>
        {/* <>
            <div className="loginState">{user && <Dashboard></Dashboard>}</div>
          </> */}
        <nav className="max-w-7xl mx-auto px-20">
          <ul className="relative flex items-center justify-between h-16">
            <li>
              <img src={logo} className="max-h-10 inset-y-4"></img>
            </li>
            <li className="text-gray-500 font-medium tracking-wider hover:text-blue-400 active:text-blue-400">
              <Link to="/">My Tasks</Link>
              </li>
            <li className="text-gray-500 font-medium tracking-wider hover:text-blue-400 active:text-blue-400">
              <Link to="/">Team Board</Link>
            </li>
            <li className="text-gray-500 font-medium tracking-wider hover:text-blue-400 active:text-blue-400">
              <Link to="/kumospace">Coffee Room</Link>
            </li>
            <li className="text-gray-500 font-extralight">|</li>
            <li className="text-gray-500 font-semibold tracking-wider hover:text-blue-400 active:text-blue-400">
              <Link to="/profile">P</Link>
            </li>
            <li>
              <FormModal></FormModal>
            </li>
          </ul>
        </nav>
      </>
    );
  }
  return (
    <div>
      <p>{/* Please <Link to="/login">Login</Link> */}</p>
    </div>
  );
};

export default Navbar;
