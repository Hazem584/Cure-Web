import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchByLoactaionBtn = () => {
     return (
          <div
               role="button"
               className="flex items-center px-5 py-3 text-primary hover:text-white hover:bg-primary transition-all duration-150 font-montserrat border border-primary text-center rounded-[10px]"
          >
               <CiSearch className="text-2xl" />
               Search By Loaction
          </div>
     );
};

export default SearchByLoactaionBtn;
