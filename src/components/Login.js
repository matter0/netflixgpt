import React, { useState } from "react";
import { Header } from "./Header";

export const Login = () => {
  const [isSignIn, setisSignIn] = useState();
  const toggleSigninForm = () => {
    setisSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form className="absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-70">
        <h1 className="font-bold text-3xl p-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email"
          className="p-2 my-4 w-full bg-gray-700"
        ></input>
        <input
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full bg-gray-700"
        ></input>
        <button className="p-2 my-6 w-full bg-red-600 rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSigninForm}>
          {isSignIn ? "New to netflix ? signup" : "Already a user just sign in"}
        </p>
      </form>
    </div>
  );
};
