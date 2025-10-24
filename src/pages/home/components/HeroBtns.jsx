import React from "react";
import { Link } from "react-router-dom";
import { IoCalendar } from "react-icons/io5";

const HeroBtns = () => {
  return (
    <div className="btns flex flex-col sm:flex-row gap-8 font-normal">
      <Link to="/doctors">
        <div
          role="button"
          className="px-14 py-3 text-white font-montserrat bg-primary hover:bg-blue-700 active:scale-110 transition-all duration-200 text-center rounded-[10px]"
        >
          Get Started
        </div>
      </Link>
      <Link to="/booking">
        <div
          role="button"
          className="flex items-center px-7 py-3 text-primary hover:text-white hover:bg-primary transition-all duration-150 font-montserrat border border-primary text-center rounded-[10px]"
        >
          <IoCalendar className="text-2xl" />
          Book Appointment
        </div>
      </Link>
    </div>
  );
};

export default HeroBtns;
