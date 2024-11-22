import React from "react";
import Image from "next/image";
import Frame1 from "../assets/Frame-1.png";
import Frame2 from "../assets/Frame-2.png";
import Frame3 from "../assets/Frame-3.png";
import Profile from "../assets/profile.png";
import Mountain from "../assets/mountain.png";
import Aero from "../assets/Aero.png";

const Travel = () => {
  return (
    <div className="pr-[150px] pl-[150px]">
      <div className="text-white">
        <ul
          className="flex justify-between items-center border-1 bg-black
        px-6  text-[2.2rem] rounded-3xl font-semibold py-6"
        >
          <li className="border-b-[1.5px] border-b-primary pb-3 w-[7rem] text-center">
            Travel
          </li>
          <li>Digital</li>
          <li>Brand</li>
          <li>Merch</li>
        </ul>
      </div>
      <div className="bg-bgImg bg-repeat bg-cover w-full h-screen mt-6 mb-5 rounded-t-3xl">
        <h1 className="text-center pt-[4rem] text-[12rem] font-bold text-white">
          TRAVEL
        </h1>
        <p className="text-center text-[2.2rem] text-white font-semibold">
          Turn your travel experience into itinerary, <br></br> travel package
          with VYB Store and share it <br></br> with your ture followers.
        </p>
        <div className="bg-black py-10 mt-[11.5rem]">
          <h2 className="text-white text-center text-h2 font-semibold">
            Explore Our Curated Travel Itineraries
          </h2>
          <div className="mt-10 ">
            <div className="text-white text-center flex justify-evenly items-center gap-7 overflow-hidden">
              <div className="relative">
                <Image src={Frame2} className="w-[300px] h-85" />

                <div className="px-4 absolute top-[400px] left-[33px]">
                  <div className="text-[22px] font-semibold pb-0 leading-tight">
                    Darjeeling Itinerary
                  </div>
                  <div className="text-[18px] font-semibold pb-2 leading-tight">
                    West Bengal
                  </div>
                  <div className="bg-white text-primaryText rounded-3xl flex justfy-evenly gap-7 pr-2 pl-6 py-1">
                    <div className="text-[18px] font-semibold">
                      Samira Hadid
                    </div>
                    <div>
                      <Image src={Profile} className="w-6 h-6 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white text-center flex justify-evenly items-center">
                <div className="relative">
                  <Image src={Frame1} className="w-[300px] h-85" />

                  <div className="px-4 absolute top-[400px] left-[33px]">
                    <div className="text-[22px] font-semibold pb-0 leading-tight">
                      Munnar Itinerary
                    </div>
                    <div className="text-[18px] font-semibold pb-2 leading-tight">
                      Kerala
                    </div>
                    <div className="bg-white text-primaryText rounded-3xl flex justfy-evenly gap-7 pl-6 pr-2 py-1">
                      <div className="text-[18px] font-semibold">
                        Samira Hadid
                      </div>
                      <div>
                        <Image src={Profile} className="w-6 h-6 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white text-center flex justify-evenly items-center">
                <div className="relative">
                  <Image src={Frame3} className="w-[300px] h-85" />

                  <div className="px-4 absolute top-[400px] left-[33px]">
                    <div className="text-[22px] font-semibold pb-0 leading-tight">
                      Delhi Itinerary
                    </div>
                    <div className="text-[18px] font-semibold pb-2 leading-tight">
                      Delhi
                    </div>
                    <div className="bg-white text-primaryText rounded-3xl flex justfy-evenly gap-7 pl-6 pr-2 py-1">
                      <div className="text-[18px] font-semibold">
                        Samira Hadid
                      </div>
                      <div>
                        <Image src={Profile} className="w-6 h-6 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white text-center flex justify-evenly items-center">
                <div className="relative">
                  <Image src={Frame3} className="w-[300px] h-85" />

                  <div className="px-4 absolute top-[400px] left-[33px]">
                    <div className="text-[22px] font-semibold pb-0 leading-tight">
                      Delhi Itinerary
                    </div>
                    <div className="text-[18px] font-semibold pb-2 leading-tight">
                      Delhi
                    </div>
                    <div className="bg-white text-primaryText rounded-3xl flex justfy-evenly gap-7 pl-6 pr-2 py-1">
                      <div className="text-[18px] font-semibold">
                        Samira Hadid
                      </div>
                      <div>
                        <Image src={Profile} className="w-6 h-6 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="text-white text-center flex justify-evenly items-center">
                <div>
                  <Image src={Frame3} className="w-80 h-90" />
                </div>
              </div>
              <div className="text-white text-center flex justify-evenly items-center">
                <div>
                  <Image src={Frame3} className="w-80 h-90" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-mgt from-1% to-black to-80%  bg-no-repeat bg-cover w-full h-[730px] relative mt-[40.9rem]">
        <h2 className="text-white text-center text-h2 font-semibold absolute left-[34rem] top-[3rem]">
          How to list?
        </h2>
        <div className="absolute top-[7rem]">
          <Image src={Aero} />
        </div>
        <div className="pt-[12rem]">
          <Image src={Mountain} className="m-auto w-full rounded-b-3xl" />
        </div>
        <div className="text-white text-h2 text-center absolute top-[43rem] left-[20rem]">
          You Curate Experience, We Make It Happen
        </div>
      </div>
    </div>
  );
};

export default Travel;
