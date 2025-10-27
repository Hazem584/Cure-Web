import React from "react";
import { Avatar } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

const Card = ({ Doc: { name, photo } }) => {
  return (
    <div className="border border-white inline-flex flex-col p-2 rounded-2xl   max-[639px]:w-11/12  ">
      <div className="inline-flex gap-3 px-2  rounded-lg border-white ">
        <Avatar
          src={photo}
          alt={`Photo of Dr. ${name}`}
          variant="rounded"
          size="xxl"
          className="  object-cover rounded-lg"
        />

        <div className="inline-flex flex-col hamo">
          <h1 className="text-[#33384B] font-semi dark:text-dark-textOnDark mt-2 text-2xl">
            {name}
          </h1>
          <h1 className="subheading text-neutral dark:text-dark-textSecondary font-normal text-[1rem] pt-2 ">
            Orthopedic | El-Nasr Hospital
          </h1>
          <div className="inline-flex gap-10 mt-3">
            <h1 className="inline-flex  dark:text-dark-textSecondary  gap-2">
              <FaStar className=" size-6" color="gold " />
              4.8
            </h1>

            <h1 className="inline-flex gap-2  dark:text-dark-textSecondary  ">
              {" "}
              <CiClock2 className="size-6 " /> 9:30am - 8:00pm
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-5 ml-2 mb-2">
        <h1 className="text-2xl font-semi text-gray-800 dark:text-white">
          Price
          <span className="text-xl text-gray-500 dark:text-gray-300">
            /hour
          </span>
        </h1>
        <h1 className="text-red-300 text-2xl mr-5">$350</h1>
      </div>
      <button className="bg-blue-700 rounded-lg text-white w-full h-10 ">
        Book appoienmants
      </button>
    </div>
  );
};
export default Card;
