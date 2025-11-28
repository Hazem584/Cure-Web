import React from "react";
import { Avatar } from "@material-tailwind/react";
import { WiStars } from "react-icons/wi";
import { IoLocation } from "react-icons/io5";
import HeroBtns from "../components/HeroBtns";

const HeroSection = () => {
     return (
       <div className="hero-section relative flex justify-center items-center  pt-10">
         <div className="ellipse flex justify-center items-center absolute z-0 dark:hidden">
           <img src="HeroEllipses/Ellipse1.svg" alt="" />
         </div>
         <div className="ellipse flex justify-center items-center absolute z-0 dark:hidden">
           <img src="HeroEllipses/Ellipse2.svg" alt="" />
         </div>
         <div className="ellipse flex justify-center items-center absolute z-0 dark:hidden">
           <img src="HeroEllipses/Ellipse3.svg" alt="" />
         </div>

         <div className="deco absolute hidden md:flex top-[50%] left-[10%] flex-col gap-4 items-center">
           <IoLocation className="text-3xl text-primary animate-bounce" />
           <div className="deco-text shadow-2xl py-1 px-2 bg-[#E8EFF8] dark:bg-dark-bgSurface dark:text-dark-textPrimary text-secondry rounded-3xl  text-sm">
             Doctors Near You
           </div>
         </div>
         <div className="flex flex-col  gap-6 items-center font-normal relative z-40">
           <button className="flex items-center py-1 px-2 bg-[#E8EFF8] dark:bg-dark-bgSurface dark:text-dark-textPrimary rounded-3xl text-[0.85rem]">
             <WiStars className="text-base" />
             Upgrade Your Account
           </button>
           <div className="flex flex-col gap-6 items-center text-center">
             <h1 className="heading sm:text-3xl text-2xl font-[georgia] dark:text-dark-textOnDark text-secondry">
               Find and book top doctors near you
             </h1>
             <div className="subheading sm:max-w-[405px] font-montserrat dark:text-dark-textSecondary text-neutral">
               Easily find top-rated specialists near you and book appointments
               in just a few clicks. Whether you need an in-person visit
               consultation, we're here to connect you with the right care—fast,
               simple, and secure.
             </div>
             <div className="info flex items-center dark:bg-dark-bgSurface dark:text-dark-textPrimary text-neutral font-normal bg-[#E8EFF8] p-2 rounded-[40px]">
               <div className="flex items-center -space-x-4">
                 <Avatar
                   variant="circular"
                   alt="user 1"
                   className="border-2 h-8 w-8 border-white hover:z-10 focus:z-10"
                   src="https://i.postimg.cc/hhFXM7tG/ba06b3e7882ffb9e60838270ea0dd9b82b74eda6.jpg"
                 />
                 <Avatar
                   variant="circular"
                   alt="user 1"
                   className="border-2 h-8 w-8 border-white hover:z-10 focus:z-10"
                   src="https://i.postimg.cc/DmVS5bwW/5aab5459786b226d5d70e39a1dfa0e817fee1e4d.jpg"
                 />
                 <Avatar
                   variant="circular"
                   alt="user 1"
                   className="border-2 h-8 w-8 border-white hover:z-10 focus:z-10"
                   src="https://i.postimg.cc/vDR4X6ZB/78c6f3d090d7612fc01d327445bdf0de496e5c16.jpg"
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
