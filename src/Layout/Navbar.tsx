// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { UserContext } from '../Store/UserContext';
import FormModal from '../Components/Form/FormModal';
import React, { useContext } from 'react';

import logo from '../images/kaizen-logo.png';

const Navbar = () => {
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
            <Link to="/">Kanban</Link>
          </li>
          <li className="text-gray-500 font-medium tracking-wider hover:text-blue-400 active:text-blue-400">
            <Link to="/kumospace">Coffee Room</Link>
          </li>
          <li className="text-gray-500 font-medium tracking-wider hover:text-blue-400 active:text-blue-400">
            <Link to="/profile">My profile</Link>
          </li>
          <li>
            <FormModal></FormModal>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
