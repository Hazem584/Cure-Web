import React from "react";
import { Avatar } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

const Cards = ({
  Doc: { name, specialty,photo},
}) => {
  return (
    <div className="border border-[#BBC1C7] dark:border-dark-borderDark  flex flex-col p-2 rounded-2xl  w-auto max-[639px]:w-11/12  ">
      <div className="flex justify-between items-center mt-3  ">
        <div className="flex gap-2 dark:text-dark-textSecondary">
          
        </div>
         
       </div>
     
      <div className="flex gap-3 px-2 w-80 rounded-lg ">
    <Avatar
  src={photo}
  alt={`Photo of Dr. ${name}`}
  variant="rounded"
  size="lg"
  className="w-20 h-20 object-cover rounded-lg"
    />

        <div className="flex flex-col">
          <h1 className="text-[#33384B] font-semi dark:text-dark-textOnDark mt-2 text-2xl">
            {name}
          </h1>
          <h1 className="subheading text-neutral dark:text-dark-textSecondary font-normal text-[1rem] pt-2 ">
           Orthopedic | El-Nasr Hospital
          </h1>
          <div className="flex w-auto h-10">
             <h1 className="flex pr-5 mx-auto"><FaStar color="gold" />
             4.8
             </h1>
    

             <h1 className="flex   ">  <CiClock2 className="mt-1 w-5 h-5" /> 9:30am - 8:00pm</h1>
        </div>
        
          </div>
         


      </div>
     
      <div className="flex justify-between ml-2 mb-2">

     <h1 className="text-2xl font-semi text-gray-800 dark:text-white">
  Price<span className="text-xl text-gray-500 dark:text-gray-300">/hour</span>
</h1>
      <h1 className="text-red-300 text-2xl mr-5">$350</h1>
      </div>
      <button className="bg-blue-700 rounded-lg text-white w-full h-10 ">Book appoienmants</button>
    
    </div>
  );
};
export default Cards;
