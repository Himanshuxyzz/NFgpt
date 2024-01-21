import React from "react";
import * as ASSETS from "../constants/constants";
import { cn } from "../utils/utils";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = ({ className }) => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-10 px-7 sm:px-10 md:px-24 bg-gradient-to-b from-black flex justify-between items-center",
        className
      )}
    >
      <img
        className="h-10 md:h-16 mt-2 saturate-200"
        src={ASSETS.LOGO_URL}
        alt="logo"
      />

      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 rounded-full"
            src={user?.photoURL === undefined ? null : user?.photoURL}
            alt="profile"
          />
          <p className="font-bold underline underline-offset-4 decoration-2">{user?.displayName}</p>
        </div>
        <Button onClick={handleSignout} content={"Sign out"} />
      </div>
    </header>
  );
};

export default Header;
