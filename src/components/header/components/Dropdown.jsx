import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { PiGearSixLight } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosLock } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MenuItem, Typography, MenuList } from "@material-tailwind/react";

const Dropdown = ({setIsMenuOpen}) => {
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
          </>
     );
};

export default Dropdown;
