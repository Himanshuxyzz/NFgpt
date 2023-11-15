import React from "react";
import * as ASSETS from "../constants/constants";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-10 px-7 sm:px-10 md:px-24 ">
      <img
        className="h-10 md:h-16 mt-2 saturate-200"
        src={ASSETS.LOGO_URL}
        alt="logo"
      />
    </header>
  );
};

export default Header;
