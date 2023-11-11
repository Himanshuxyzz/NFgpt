import React from "react";
import BackgroundImage from "../assets/Bg.jpg";

const Home = () => {
  return (
    <div className="w-full h-full overflow-hidden ">
      <img
        className="h-[800px] w-full bg-cover scale-[1.5] relative"
        src={BackgroundImage}
        alt="NF-BG"
      />
      <div className="absolute h-[800px] w-full inset-0 bg-gradient-to-top from-black via-transparent to-black bg-black bg-opacity-40 " />

      <div className="absolute w-full h-[800px] flex flex-col gap-3 justify-center items-center inset-0">
        <h1 className="text-4xl px-6 text-center sm:text-6xl font-bold text-white">
          Enjoy big movies, hit series and more from ₹ 149.
        </h1>
        <p className="sm:px-9 text-2xl text-white sm:text-3xl font-bold">
          Join today. Cancel anytime.
        </p>

        <h3 className="px-9 text-center text-white text-1xl sm:text-2xl font-bold w-[320px] sm:w-full sm:mt-3">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

          <div className="w-full mt-3 sm:mt-0 flex gap-3 items-center justify-center  flex-col sm:flex-row">
            <div className="">
              <input
                placeholder="Enter email address"
                className="text-white text-1xl outline-white rounded-sm w-full px-6 sm:px-3 py-4 bg-black/50 border border-white/40"
                type="text"
              />
            </div>
            <div className="">
              <button className="rounded-md text-1xl px-3 py-4 w-full text-white font-bold bg-red-600">
                Get Started 
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
