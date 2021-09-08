// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { UserContext } from '../Store/UserContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import FormModal from '../Components/Form/FormModal';
import React, { useContext } from 'react';
import Dashboard from '../Components/Login/Dashboard';
import { auth } from '../utilities/firebase';
import { logout } from '../utilities/firebase';
import { useState } from 'react';
import logo from '../images/kaizen-logo.png';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    userProfile: { name, email, uniqueID },
  } = useContext(UserContext);

  const [isShown, setIsShown] = useState(false);

  // console.log(user ? "yes" : "no");
  if (user) {
    return (
      <>
        <nav className="max-w-7xl mx-auto px-20">
          <ul className="relative flex items-center justify-between h-16">
            <li>
              <img src={logo} className="max-h-10 inset-y-4"></img>
            </li>
            <li className="text-gray-500 font-medium tracking-wider hover:text-blue-400 focus:text-blue-400">
              <Link to="/">Team Board</Link>
            </li>
            <li className="text-gray-500 font-medium tracking-wider hover:text-blue-400 focus:text-blue-400">
              <Link to="/mytasks">My Tasks</Link>
            </li>
            <li className="text-gray-500 font-medium tracking-wider hover:text-blue-400 focus:text-blue-400">
              <Link to="/kumospace">Coffee Room</Link>
            </li>
            <li className="text-gray-500 font-extralight">|</li>
            <li className="text-gray-500 font-semibold tracking-wider hover:text-blue-400 focus:text-blue-400">
              <Link to="/profile">P</Link>
            </li>
            <li>
              <button
                // onMouseEnter={() => setIsShown(true)}
                // onMouseOver={() => setIsShown(true)}
                // onMouseLeave={() => setIsShown(true)}
                onClick={logout}
                className="bg-green-500 h-8 w-8"
              >
                L
              </button>
              {isShown && (
                <div className="loginState">{user && <Dashboard />}</div>
              )}
            </li>
            <li>
              <FormModal></FormModal>
            </li>
          </ul>
        </nav>
      </>
    );
  }
  return <div></div>;
};

export default Navbar;
