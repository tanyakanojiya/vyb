import React from "react";
import Image from "next/image";

import Girl from "../assets/girl.png";
import Pin from "../assets/pin.png";
import Minka from "../assets/Minka.png";

const Influencer = () => {
  return (
    <div className="pr-[150px] pl-[150px] mt-8">
      <div className="text-primary text-center text-h2 font-semibold">
        Our Influencers
      </div>
      <div className="text-white  mx-auto">
        <div className="flex justify-evenly justify-flex items-center gap-10 mt-10 ">
          <div className="w-[250px] h-[250px] bg-gradient-to-r from-Gradient1 to-Gradient2 rounded-full   hover:relative  ">
            <div className=" w-[250px] h-[250px] rounded-full overflow-hidden   hover:absolute bottom-2 right-2">
              <Image src={Girl} className="grayscale hover:grayscale-0" />
            </div>
          </div>
          <div className="w-[250px] h-[250px] bg-gradient-to-r from-Gradient1 to-Gradient2 rounded-full   hover:relative  ">
            <div className=" w-[250px] h-[250px] rounded-full overflow-hidden   hover:absolute bottom-2 right-2">
              <Image src={Girl} className="grayscale hover:grayscale-0" />
            </div>
          </div>
          <div className="w-[250px] h-[250px] bg-gradient-to-r from-Gradient1 to-Gradient2 rounded-full   hover:relative  ">
            <div className=" w-[250px] h-[250px] rounded-full overflow-hidden   hover:absolute bottom-2 right-2">
              <Image src={Girl} className="grayscale hover:grayscale-0" />
            </div>
          </div>
          <div className="w-[250px] h-[250px] bg-gradient-to-r from-Gradient1 to-Gradient2 rounded-full   hover:relative  ">
            <div className=" w-[250px] h-[250px] rounded-full overflow-hidden   hover:absolute bottom-2 right-2">
              <Image src={Girl} className="grayscale hover:grayscale-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Influencer;
