import React, { useState } from "react";
import { GrNotification } from "react-icons/gr";
import { FaBarsStaggered, FaRegCircleXmark } from "react-icons/fa6";
import Dropdown from "./Dropdown";
import {
     Avatar,
     Button,
     Menu,
     MenuHandler,
     MenuItem,
     MenuList,
     Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";



const ProfileAvatar = ({theme ,setTheme}) => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [open, setOpen] = useState(false)

     return (
       <div className="flex gap-8 items-center">
         <div
           className={`flex gap-5 font-montserrat text-xs overflow-hidden transition-all duration-200 ${
             open ? "w-100 !overflow-visible" : "w-0"
           }`}
         >
           <div
             className={`flex gap-5 dark:text-dark-textSecondary  transition-transform duration-300 translate-x-36 ${
               open ? "!translate-x-0" : ""
             }`}
           >
             <Link to="/">
               <button className="bg-lighttertiary dark:bg-dark-bgSurface p-2 rounded-lg hover:scale-110 transition-transform duration-150">
                 Home
               </button>
             </Link>
             <Link to="/booking">
               <button className="bg-lighttertiary dark:bg-dark-bgSurface p-2 rounded-lg hover:scale-110 transition-transform duration-150">
                 Booking
               </button>
             </Link>
           </div>
         </div>

         <div className="flex gap-3 text-1xl dark:text-dark-textSecondary">
           <Typography
             as="button"
             className="hover:scale-110 rounded-lg bg-lighttertiary dark:bg-dark-bgSurface p-2"
             onClick={() => setOpen(!open)}
           >
             {open ? <FaRegCircleXmark /> : <FaBarsStaggered />}
           </Typography>
           <Typography
             as="button"
             className="hover:scale-110 rounded-lg bg-lighttertiary dark:bg-dark-bgSurface p-2"
           >
             <GrNotification />
           </Typography>
         </div>
         <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
           <MenuHandler>
             <Button
               variant="text"
               color="blue-gray"
               className="flex items-center rounded-full p-0"
             >
               <Avatar
                 variant="circular"
                 size="md"
                 alt="tania andrew"
                 withBorder={true}
                 color="blue-gray"
                 className=" p-0.5"
                 src="https://i.postimg.cc/hhFXM7tG/ba06b3e7882ffb9e60838270ea0dd9b82b74eda6.jpg"
               />
             </Button>
           </MenuHandler>

           <MenuList className="p-3 sm:w-1/3 sm:max-w-[300px]">
             {/* the drop down menu */}
             <Dropdown
               setIsMenuOpen={setIsMenuOpen}
               theme={theme}
               setTheme={setTheme}
             />
           </MenuList>
         </Menu>
       </div>
     );
};

export default ProfileAvatar;
