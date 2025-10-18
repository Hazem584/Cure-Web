import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { PiGearSixLight } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosLock } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MenuItem, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import Themetoggler from "./Themetoggler";

const Dropdown = ({ setIsMenuOpen,theme ,setTheme }) => {
     const profileMenuItems = [
          {
               label: "Payment Method",
               icon: CiCreditCard1,
          },
          {
               label: "Settings",
               icon: PiGearSixLight,
          },
          {
               label: "Privacy Policy",
               icon: IoIosLock,
          },
          {
               label: "Log Out",
               icon: HiOutlineLogout,
          },
     ];
     const closeMenu = () => setIsMenuOpen(false);
     return (
          <>
               <MenuItem>
                    <div className="user flex !hover:border-0 justify-between items-center justify-items-center ">
                         <div className="flex items-center gap-3">
                              <Link to="/">
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
                                   <div className="profile-address !text-[0.7rem] !text-gray-400">
                                        129,El-Nasr Street, Cairo
                                   </div>
                              </div>
                         </div>

                         <button>
                              <PiGearSixLight className="text-primary text-2xl" />
                         </button>
                    </div>
               </MenuItem>
               {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                         <MenuItem
                              key={label}
                              onClick={closeMenu}
                              className={`flex items-center justify-between gap-2 rounded text-secondry active:bg-blue-gray-300 ${
                                   isLastItem
                                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                        : ""
                              }`}
                         >
                              <div className="flex gap-2">
                                   {React.createElement(icon, {
                                        className: `h-6 w-6 ${
                                             isLastItem ? "text-red-500" : ""
                                        }`,
                                   })}
                                   <Typography
                                        as="span"
                                        variant="small"
                                        className="font-normal"
                                        color={isLastItem ? "red" : "inherit"}
                                   >
                                        {label}
                                   </Typography>
                              </div>
                              <IoIosArrowForward />
                         </MenuItem>
                    );
               })}
               <MenuItem>
                    <Themetoggler  theme={theme} setTheme={setTheme} />
               </MenuItem>
          </>
     );
};

export default Dropdown;
