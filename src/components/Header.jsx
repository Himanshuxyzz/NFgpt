import React from "react";
import * as ASSETS from "../constants/constants";
import { cn } from "../utils/utils";

const Header = ({ className }) => {
  return (
    <header
      className={cn(
        "fixed top-0 w-full z-10 px-7 sm:px-10 md:px-24 bg-gradient-to-b from-black",
        className
      )}
      // className="fixed top-0 w-full z-10 px-7 sm:px-10 md:px-24 bg-gradient-to-b from-black"
    >
      <img
        className="h-10 md:h-16 mt-2 saturate-200"
        src={ASSETS.LOGO_URL}
        alt="logo"
      />
    </header>
  );
};

export default Header;
