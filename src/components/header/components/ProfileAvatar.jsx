import React, { useState } from "react";
import { GrNotification } from "react-icons/gr";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Dropdown from "./Dropdown";
import { PiGearSixLight } from "react-icons/pi";
import {
     Avatar,
     Button,
     Menu,
     MenuHandler,
     MenuItem,
     MenuList,
     Typography,
} from "@material-tailwind/react";



const ProfileDropdown = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);


     return (
          <div className="flex gap-8 items-center">
               <div className="flex gap-3 text-1xl">
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
                                   src="https://docs.material-tailwind.com/img/face-2.jpg"
                              />
                         </Button>
                    </MenuHandler>

                    <MenuList className="p-3 w-1/3 max-w-[300px]">
                         <div className="user flex !hover:border-0 justify-between items-center justify-items-center ">
                              <div className="flex items-center gap-3">
                                   <Link to="Home">
                                        <div className="pic w-14 rounded-full overflow-hidden">
                                             <img
                                                  alt="Tailwind CSS Navbar component"
                                                  src="https://i.postimg.cc/vH3MDBr2/tom1.png"
                                             />
                                        </div>
                                   </Link>
                                   <div className="flex flex-col">
                                        <div className="profile-name !text-1xl !font-bold !text-[georgia]">
                                             Uncle Tom
                                        </div>
                                        <div className="profile-address !text-[0.65rem] !text-gray-400">
                                             129,El-Nasr Street, Cairo
                                        </div>
                                   </div>
                              </div>

                              <button>
                                   <PiGearSixLight className="text-primary text-2xl" />
                              </button>
                         </div>
                         {/* the drop down menu */}
                         <Dropdown setIsMenuOpen={setIsMenuOpen}/>
                         </MenuList>
               </Menu>
          </div>
     );
};

export default ProfileDropdown;
