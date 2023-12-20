import { useRef, useState } from "react";

import * as ASSETS from "../constants/constants";
import Dialog from "../components/Dialog";
import Input from "../components/Input";
import Button from "../components/Button";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Login from "../components/main/Login";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const email = useRef(null);
  const password = useRef(null);

  const handleModal = () => {
    setErrMsg("");
    setIsOpen(!isOpen);
  };

  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const handleBtnClick = (e) => {
    setErrMsg("");
    e.preventDefault();

    if (!(email.current.value || password.current.value)) {
      // console.log("disabled");
      setIsDisabled(!isDisabled);
    } else {
      setIsDisabled(!isDisabled);
    }
    // validate the form data
    // console.log(email.current.value, password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    setErrMsg(message);

    // if message is present means if value is not null
    if (message) return;
    // if above condition didn't fullfiled then the below code comes into play - Sign in /Sign up logic

    if (!isSignIn) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrMsg(`${errorCode} - ${errorMessage}`);
        });
    }
  };
  return (
    <div className="w-full ">
      <img
        className="min-h-full w-full bg-cover scale-150 sm:scale-[1.5] relative"
        src={ASSETS.BG_URL}
        alt="NF-BG"
      />
      <div className="absolute h-full w-full inset-0 bg-gradient-to-top from-black via-transparent to-black bg-black bg-opacity-40" />

      <div className=" absolute w-full flex flex-col gap-3 justify-center items-center inset-0">
        <h2 className="text-4xl px-6 text-center sm:text-6xl font-bold text-white">
          Enjoy big movies, hit series and more from ₹ 149.
        </h2>
        <p className="sm:px-9 text-2xl text-white sm:text-3xl font-bold">
          Join today. Cancel anytime.
        </p>

        <h3 className="px-9 text-center text-white text-1xl sm:text-2xl font-bold w-[320px] sm:w-full sm:mt-3">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className=" mt-3 sm:mt-0 flex gap-3 items-center flex-col sm:flex-row">
          <Button content={"Get started"} onClick={handleModal} />
          {isOpen && (
            <Login
              handleModal={handleModal}
              handleBtnClick={handleBtnClick}
              toggleSignUp={toggleSignUp}
              isSignIn={isSignIn}
              errMsg={errMsg}
              email={email}
              password={password}
              isDisabled={isDisabled}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
