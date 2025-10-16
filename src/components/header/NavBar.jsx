import React from "react";
import { BsHeartPulse } from "react-icons/bs";
import SearchBar from "./components/SearchBar";
import ProfileDropdown from "./components/ProfileDropdown";
const NavBar = () => {
     return (
          <div className="navbar bg-base-100 h-28 justify-between shadow-sm px-10">
               <div className="logo">
                    <BsHeartPulse className="text-primary text-3xl" />
               </div>

               <SearchBar />
               {/* profile */}
               <ProfileDropdown />
          </div>
     );
};

export default NavBar;
