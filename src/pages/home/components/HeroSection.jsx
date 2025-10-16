import React from "react";
import { WiStars } from "react-icons/wi";
import { IoLocation } from "react-icons/io5";
import HeroBtns from "./HeroBtns";

const HeroSection = () => {
     return (
          <div className="hero-section relative flex sm:justify-center sm:items-center justify-start pt-10">
               <div className="deco absolute hidden md:flex top-[50%] left-[10%] flex-col gap-4 items-center">
                    <IoLocation className="text-2xl text-primary" />
                    <div className="deco-text text-secondry text-sm">
                         Doctors Near You
                    </div>
               </div>
               <div className="flex flex-col  gap-6 items-start sm:items-center font-normal">
                    <button className="flex items-center py-1 px-2 bg-[#E8EFF8] rounded-3xl text-[0.85rem]">
                         <WiStars className="text-base" />
                         Upgrade Your Account
                    </button>
                    <div className="flex flex-col gap-6 sm:items-center sm:text-center">
                         <h1 className="heading text-3xl font-[georgia] text-secondry">
                              Find and book top doctors near you
                         </h1>
                         <div className="subheading sm:max-w-[405px] font-montserrat text-neutral">
                              Easily find top-rated specialists near you and
                              book appointments in just a few clicks. Whether
                              you need an in-person visit consultation, we're
                              here to connect you with the right care—fast,
                              simple, and secure.
                         </div>
                         <div className="info flex items-center text-secondry bg-[#E8EFF8] p-2 rounded-[40px]">
                              <div className="flex items-center">
                                   <img
                                        className="w-8 h-8 object-cover rounded-full border-2 border-white -ml-0"
                                        src="https://i.postimg.cc/DmVS5bwW/5aab5459786b226d5d70e39a1dfa0e817fee1e4d.jpg"
                                        alt="avatar"
                                   />
                                   <img
                                        className="w-8 h-8 object-cover rounded-full border-2 border-white -ml-4"
                                        src="https://i.postimg.cc/vDR4X6ZB/78c6f3d090d7612fc01d327445bdf0de496e5c16.jpg"
                                        alt="avatar"
                                   />
                                   <img
                                        className="w-8 h-8 object-cover rounded-full border-2 border-white -ml-4"
                                        src="https://i.postimg.cc/hhFXM7tG/ba06b3e7882ffb9e60838270ea0dd9b82b74eda6.jpg"
                                        alt="avatar"
                                   />
                              </div>
                              <div>10k+ happy patients </div>
                         </div>
                    </div>
                    <HeroBtns />
               </div>
          </div>
     );
};

export default HeroSection;
