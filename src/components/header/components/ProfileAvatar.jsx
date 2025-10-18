import React, { useState } from "react";
import { GrNotification } from "react-icons/gr";
import { FaBarsStaggered } from "react-icons/fa6";
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



const ProfileAvatar = ({theme ,setTheme}) => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);


     return (
          <div className="flex gap-8 items-center">
               <div className="flex gap-3 text-1xl dark:text-dark-textSecondary">
                    <FaBarsStaggered />

                    <GrNotification />
               </div>
               <Menu
                    open={isMenuOpen}
                    handler={setIsMenuOpen}
                    placement="bottom-end"
               >
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

                    <MenuList className="p-3 w-1/3 max-w-[300px]">
                         {/* the drop down menu */}
                         <Dropdown setIsMenuOpen={setIsMenuOpen} theme={theme} setTheme={setTheme}/>
                         
                    </MenuList>
                    
               </Menu>
          </div>
     );
};

export default ProfileAvatar;
