import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../../utilities/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./login.css";
import logo from '../../images/kaizen-logo.png';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/");
  }, [user, loading]);
  //
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
          <label 
            htmlFor="password"
            className="mt-2 font-medium tracking-wide text-gray-600">
              Password
          </label>
          <input
            id="password"
            type="password"
            className="mt-1 px-4 h-12 w-80 border-2 border-blue-400 rounded-lg focus:outline-none ring-4 ring-transparent focus:ring-blue-100 text-gray-600 placeholder-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••••"
          />
          <p className="mt-1 self-end font-semibold text-blue-400 underline tracking-wide">
            <Link to="/passwordreset">Forgot Password?</Link>
          </p>
        </div>
        <button 
          className="mt-4 h-12 w-80 bg-blue-400 text-white text-2xl font-bold tracking-wide rounded-lg shadow-lg ring-4 ring-transparent hover:ring-blue-100" 
          onClick={() => signInWithEmailAndPassword(email, password)}>
          Log In
        </button>
        {/* <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button> */}

          <div 
          className="mt-4 text-gray-600 font-medium">
          Don't have an account yet? <Link to="/register" className="underline font-semibold text-blue-400 tracking-wide">Sign Up</Link>
          </div>
      </div>
    </div>
  );
}
export default Login;
