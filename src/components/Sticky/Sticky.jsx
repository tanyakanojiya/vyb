import React from "react";
import Image from "next/image";
import Img1 from "../assets/Img1.png";
import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";
import Img4 from "../assets/Img4.png";

const Sticky = () => {
  return (
    <div className="pr-[150px] pl-[150px] py-4 text-white mx-auto">
      <div className="container mx-auto pt-[55px] ">
        {/* <div className="text-[30px] font-Sansation text-primary h-[300px] sticky top-[300px]">
            Heading
          </div> */}
        <div className="flex flex-col gap-9 font-Sansation  ">
          <div className="text-primary text-center text-h2  font-semibold">
            How to get started?
          </div>
          <div className="bg-[#a94949] w-[850px] h-[370px] flex space-around items-center gap-3 px-[60px] rounded-3xl sticky top-[250px] left-[350px]">
            <div className="px-[4rem]">
              <div className="text-h3 font-semibold leading-tight mb-6 ">
                Sign Up and create your own store hassle-free.
              </div>
              <div className=" text-[15px] leading-tight ">
                Join us via google signin and verify your influencer status by
                entering you social media Id and unlock your store @ zero cost.
              </div>
            </div>
            <div className="w-[550px] mr-[3rem]">
              <Image src={Img1} />
            </div>
          </div>

          <div className="bg-[#5ed46a] w-[850px] h-[370px] rotate-a flex space-around items-center gap-3 px-[60px] rounded-3xl sticky top-[260px] left-[350px]">
            <div className="px-[4rem]">
              <div className="text-h3 font-semibold leading-tight mb-6 ">
                Monetize your influencer status: Earn money adding real value
                to your true followers!
              </div>
              <div className=" text-[15px] leading-tight pr-6">
                Let VYB the money now !! Its here and widthdraw it periodically.
              </div>
            </div>
            <div className="w-[700px] mr-[3rem]">
              <Image src={Img2} />
            </div>
          </div>

          <div className="bg-[#487fd7] w-[850px] h-[370px] rotate-b flex space-around items-center gap-3 px-[60px] rounded-3xl sticky top-[230px] left-[350px]">
            <div className="px-[4rem]">
              <div className="text-h3 font-semibold leading-tight mb-6 ">
                Call audience to your store. <br></br>Easily integrate links
                into content.
              </div>
              <div className=" text-[15px] leading-tight pr-2  ">
                After setting up your products, its time to go public. Put your
                store link in insta bio and lets make forst post together!
              </div>
            </div>
            <div className="w-[450px] mr-[3rem]">
              <Image src={Img3} />
            </div>
          </div>

          <div className="bg-[#5caab6] w-[850px] h-[370px] rotate-c flex space-around items-center gap-3 px-[60px] rounded-3xl sticky top-[235px] left-[350px]">
            <div className="px-[4rem]">
              <div className="text-h3 font-semibold leading-tight mb-6 pr-[5rem] ">
                Build & customize your store front.
              </div>
              <div className=" text-[15px] leading-tight pr-[5rem] ">
                Simply fill in the details to build your digital store. Once
                done, start selling your products to your audience.
              </div>
            </div>
            <div className="mr-[3rem] ">
              <Image src={Img4} className="w-[280px] h-[280px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sticky;
