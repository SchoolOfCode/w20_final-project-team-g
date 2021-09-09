// import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { UserContext } from '../Store/UserContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import FormModal from '../Components/Form/FormModal';
import React, { useContext } from 'react';
import Dashboard from '../Components/Login/Dashboard';
import { auth } from '../utilities/firebase';
import { logout } from '../utilities/firebase';
import { useState } from 'react';
import logo from '../images/kaizen-logo.png';
import styles from './Modal.module.css';
import logoutButton from '../images/logout.png';

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
              <NavLink activeStyle={{ color: '#60A5FA' }} exact to="/">
                Team Board
              </NavLink>
            </li>
            <li className="text-gray-500 font-medium tracking-wider hover:text-blue-400 focus:text-blue-400">
              <NavLink activeStyle={{ color: '#60A5FA' }} to="/mytasks">
                My Tasks
              </NavLink>
            </li>
            <li className="text-gray-500 font-medium tracking-wider hover:text-blue-400 focus:text-blue-400">
              {/* links directly to the styles page */}
              <NavLink activeStyle={{ color: '#60A5FA' }} to="/kumospace">
                Coffee Room
              </NavLink>
            </li>
            <li className="text-gray-500 font-medium tracking-wider hover:text-blue-400 focus:text-blue-400">
              <NavLink activeStyle={{ color: '#60A5FA' }} to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="text-gray-500 font-extralight">|</li>
            <li>
              <button
                onClick={logout}
                className="h-6 w-6 mt-2 opacity-75 hover:opacity-100 transform hover:scale-110">
                  <img src={logoutButton} />
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
