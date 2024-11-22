import React from "react";
import Image from "next/image";

import a from "../assets/c.png";
import b from "../assets/a.png";
import c from "../assets/b.png";
import d from "../assets/d.png";

const Illustration1 = () => {
  return (
    <div className="pr-[10rem] pl-[10rem] mt-6 flex justify-between items-center gap-10 px-8">
      <div className="">
        <h3 className="text-primary text-[2.2rem] text-center font-bold">
          From Creation to Monetization: Vyb Store Has It All
        </h3>
      </div>
      <div className="flex justify-between items-center gap-6 pt-6 pl-8">
        <div className="text-white">
          <div className="bg-black text-center rounded-3xl w-[350px] px-2  pt-7 pb-6 mb-4">
            <h4 className="text-[2rem] font-bold leading-tight">
              Trusted By <br></br> Influencers
            </h4>
            <div className="text-[1.18rem] font-semibold px-2 pt-3 pb-[13px] text-center leading-tight">
              A trusted platform for influencers to grow and earn.
            </div>
            <Image src={d} className="w-[170px] py-3 mx-auto" />
          </div>
          <div className="bg-black px-5 py-4 pt-7 text-center rounded-3xl w-[350px]">
            <h4 className="text-[2rem] font-bold leading-tight">
              Authentic Payment Partner
            </h4>
            <div className="text-[1.18rem] font-semibold  pt-3 pb-[13px] text-center leading-tight">
              Reliable, fast, and secure payments you can trust
            </div>
            <Image src={b} className="w-[140px] pt-3 mx-auto" />
          </div>
        </div>
        <div className="text-white">
          <div className="bg-black px-5 py-4 pt-7 text-center rounded-3xl mb-4 w-[350px]">
            <h4 className="text-[2rem] font-bold leading-tight">
              Secured Data
            </h4>
            <div className="text-[1.18rem] font-semibold  pt-3 pb-[13px] text-center leading-tight">
              Advanced security measures to protect your valuable data
            </div>
            <Image src={a} className="w-[160px] py-3 mx-auto mb-4" />
          </div>
          <div className="bg-black text-center rounded-3xl w-[350px] px-2  pt-6 pb-3">
            <h4 className="text-[2rem] font-bold leading-tight">
              Monetize Your <br></br> Influence
            </h4>
            <div className="text-[1.11rem] font-semibold px-4 pt-3 pb-[16px] text-center leading-tight ">
              Seamlessly turn your influence into consistent revenue
            </div>
            <Image src={c} className="w-[170px] py-3 mx-auto mb-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Illustration1;
