import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../../utilities/firebase";
import "./Reset.css";
import logo from '../../images/kaizen-logo.png';

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/");
  }, [user, loading]);
  return (
    <div className="">
      <div className="flex flex-col w-full h-full items-center justify-center p-20">
        <img src={logo} alt="logo" className="w-80" />
        <div className="flex flex-col items-start">
          <label 
            htmlFor="email"
            className="mt-6 font-medium tracking-wide text-gray-600">
              Email
          </label>
          <input
            id="email"
            type="text"
            className="mt-1 px-4 h-12 w-80 border-2 border-blue-400 rounded-lg focus:outline-none ring-4 ring-transparent focus:ring-blue-100 text-gray-600 placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="janedoe@email.com"
          />
        </div>
        <button 
          className="mt-6 h-12 w-80 bg-blue-400 text-white text-2xl font-bold tracking-wide rounded-lg shadow-lg ring-4 ring-transparent hover:ring-blue-100" 
          onClick={() => sendPasswordResetEmail(email)}>
            Reset Password
        </button>
        <div className="mt-4 text-gray-600 font-medium tracking-wide">
          Don't have an account yet? <Link to="/register" className="underline font-semibold text-blue-400 tracking-wide">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
export default Reset;
