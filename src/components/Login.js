import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //validate form data
    const isValid = checkValidData(email.current.value, password.current.value);
    setErrorMessage(isValid);

    console.log("email", email.current.value);
    console.log("password", password.current.value);
  };
  return (
    <>
      <div>
        <Header />
        <img
          className="absolute"
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_small.jpg"
        />
      </div>
      <form
        className="absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full full bg-gray-700"
          defaultValue={"utsav@gmail.com"}
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
          defaultValue={"Utsav@123"}
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-6 my-4 bg-red-700 w-full rounded-lg"
          onClick={() => {
            handleButtonClick();
          }}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer underline"
          onClick={() => {
            toggleSignInForm();
          }}
        >
          {isSignInForm
            ? "New to netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </>
  );
};

export default Login;
