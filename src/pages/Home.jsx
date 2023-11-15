import { useState } from "react";

import * as ASSETS from "../constants/constants";
import Dialog from "../components/Dialog";
import Input from "../components/Input";
import Button from "../components/Button";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full h-full  ">
      <img
        className="h-full w-full bg-cover scale-150 sm:scale-[1.5] relative"
        src={ASSETS.BG_URL}
        alt="NF-BG"
      />
      <div className="absolute h-full w-full inset-0 bg-gradient-to-top from-black via-transparent to-black bg-black bg-opacity-40" />

      <div className=" absolute w-full flex flex-col gap-3 justify-center items-center inset-0">
        <h1 className="text-4xl px-6 text-center sm:text-6xl font-bold text-white">
          Enjoy big movies, hit series and more from ₹ 149.
        </h1>
        <p className="sm:px-9 text-2xl text-white sm:text-3xl font-bold">
          Join today. Cancel anytime.
        </p>

        <h3 className="px-9 text-center text-white text-1xl sm:text-2xl font-bold w-[320px] sm:w-full sm:mt-3">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className=" mt-3 sm:mt-0 flex gap-3 items-center flex-col sm:flex-row">
          <Input placeholder={"Email address"} />
          <Button content={"Get started"} onClick={handleModal} />
          {isOpen && (
            <Dialog>
              <div className="w-[350px] flex flex-col gap-4">
                <h2>Sign In</h2>
                <Input placeholder={"Email or phone number"} />
                <Input placeholder={"Password"}/>
                <Button content={"Sign In"} />
              </div>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
