import React from "react";
import { BsHeartPulse } from "react-icons/bs";
import SearchBar from "./components/SearchBar";
import ProfileAvatar from "./components/ProfileAvatar";

import useTheme from "../customhooks/useTheme";


const NavBar = () => {
     const [theme,setTheme] = useTheme()
     return (
          <div className="navbar flex items-center bg-transparent h-28 justify-between shadow-sm px-10">
               <div className="logo">
                    <BsHeartPulse className="text-primary text-3xl" />
               </div>

               <SearchBar />
               {/* profile */}
               <ProfileAvatar theme={theme} setTheme={setTheme}/>
          </div>
     );
};

export default NavBar;
