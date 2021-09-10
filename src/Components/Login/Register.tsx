import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../../utilities/firebase";
import "./Register.css";
import logo from '../../images/kaizen-logo.png';
import google from '../../images/google.png';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
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
            htmlFor="name"
            className="mt-6 font-medium tracking-wide text-gray-600">
              Full Name
          </label>
          <input
          id="name"
            type="text"
            className="mt-1 px-4 h-12 w-80 border-2 border-blue-400 rounded-lg focus:outline-none ring-4 ring-transparent focus:ring-blue-100 text-gray-600 placeholder-gray-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
          />
          <label 
            htmlFor="email"
            className="mt-2 font-medium tracking-wide text-gray-600">
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
        </div>
        <button className="mt-6 h-12 w-80 bg-blue-400 text-white text-2xl font-bold tracking-wide rounded-lg shadow-lg ring-4 ring-transparent hover:ring-blue-100" onClick={register}>
          Sign up
        </button>
        <button className="flex p-2 mt-4 h-12 w-80 bg-gray-50 text-gray-500 text-xl font-semibold tracking-wide rounded-lg shadow-lg ring-4 ring-transparent hover:ring-blue-100" onClick={signInWithGoogle}>
        <img src={google} className="h-8 w-8 mr-10" />
          Sign up with Google
        </button>
        <div
        className="mt-4 text-gray-600 font-medium tracking-wide">
          Already have an account? <Link to="/login" className="underline font-semibold text-blue-400 tracking-wide">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
export default Register;
