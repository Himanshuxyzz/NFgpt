import React from "react";
import Dialog from "../Dialog";
import Input from "../Input";
import Button from "../Button";

const Login = ({
  handleModal,
  handleBtnClick,
  toggleSignUp,
  isSignIn,
  errMsg,
  email,
  password,
}) => {
  return (
    <Dialog handler={handleModal}>
      <div className="w-full sm:w-[350px] flex flex-col gap-4">
        <h2 className="font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <form className="flex flex-col gap-4">
          {!isSignIn && <Input placeholder={"Full name"} type={"text"} />}
          <Input
            placeholder={"Email or phone number"}
            type={"text"}
            ref={email}
          />
          <Input placeholder={"Password"} type={"password"} ref={password} />
          <p className="text-xs font-semibold text-red-500">{errMsg}</p>
          <div className="mt-8">
            <Button
              content={isSignIn ? "Sign In" : "Sign Up"}
              onClick={handleBtnClick}
            />
          </div>
        </form>

        <h3 className="text-neutral-500 cursor-pointer">
          {isSignIn ? "New to netflix?" : "Already a member"}
          <span onClick={toggleSignUp} className="text-white ml-2">
            {isSignIn ? "Sign up now." : "Sign in."}
          </span>
        </h3>
      </div>
    </Dialog>
  );
};

export default Login;
