import React from "react";
import Image from "next/image";

import HeroImg from "../assets/stock pictures/Hero section/iamge.png";
const Hero = () => {
  return (
    <div className="flex justify-between items-center font-semibold pr-[150px] pl-[150px]">
      <div className="pt-2">
        <h3 className="text-white py-4">
          <div className="flex gap-3 items-center">
            <span className="text-[4.2rem] border-1 bg-white text-primaryText px-3 rounded-xl mb-2">
              One
            </span>
            <span className="text-[4.2rem] border-1 bg-white text-primaryText px-3 rounded-xl mb-2">
              Stop
            </span>
          </div>
          {/* <br></br> */}
          <div className="mb-2">
            <span className="text-[4.2rem] border-1 bg-white text-primaryText px-3 py-0 rounded-xl ">
              Marketplace
            </span>
          </div>
          {/* <br></br> */}
          <div className="flex gap-3 items-center ">
            <span className="text-[4.2rem] border-1 bg-white text-primaryText px-3 py-0 rounded-xl mb-2">
              For
            </span>

            <span className="text-[4.2rem] border-1  text-primaryText px-3 py-0 rounded-xl bg-primary mb-2">
              Influencers
            </span>
          </div>
        </h3>
        <p className="text-white text-h1 font-semibold">
          Unleash Your Influence: Sell <br></br> ltineraries,Build Your Brand,
          <br></br>Create Merch, and Share <br></br> Content - All in One Hub.
        </p>
        <div className="text-white py-8 flex gap-7 items-center">
          <button className="border-1 bg-primary text-primaryText px-4 py-3 rounded-2xl text-[20px]">
            Demo Store
          </button>
          <button
            className="border-1 border-gradient-to-bl from-Gradient1 to-Gradient2 border
          bg-gradient-to-bl from-Gradient1 to-Gradient2 bg-clip-text text-transparent
          px-4 py-3 rounded-2xl text-[20px]"
          >
            Join Waitlist
          </button>
        </div>
      </div>
      <div>
        <Image src={HeroImg} className="w-[560px] " />
      </div>
    </div>
  );
};

export default Hero;
