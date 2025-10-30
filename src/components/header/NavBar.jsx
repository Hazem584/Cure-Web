import React from "react";
import { BsHeartPulse } from "react-icons/bs";
import SearchBar from "./components/SearchBar";
import ProfileAvatar from "./components/ProfileAvatar";

import useTheme from "../customhooks/useTheme";
import { Link } from "react-router-dom";


const NavBar = () => {
     const [theme,setTheme] = useTheme()
     return (
          <div className="navbar transition-all duration-200 flex items-center bg-transparent dark:bg-dark-darkBg h-28 justify-between shadow-sm px-10">
               <Link to="/"> <div className="logo hover:scale-125 duration-200">
                    <BsHeartPulse className="text-primary text-3xl" />
               </div>
               </Link>

               <SearchBar />
               {/* profile */}
               <ProfileAvatar theme={theme} setTheme={setTheme}/>
          </div>
     );
};

export default NavBar;
