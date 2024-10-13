import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG, USER_AVTAR } from "../utils/const";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //validate form data
    const isValid = checkValidData(email.current.value, password.current.value);
    setErrorMessage(isValid);
    if (isValid !== null) return isValid;

    //signup/signin
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVTAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${(errorCode, errorMessage)}`);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${(errorCode, errorMessage)}`);
        });
    }
  };
  //https://www.netflix.com/login
  return (
    <>
      <div>
        <Header />
        <img className="absolute" alt="logo" src={BACKGROUND_IMG} />
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
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
            defaultValue={"utsav"}
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
